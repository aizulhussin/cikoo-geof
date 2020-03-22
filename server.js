/* server.js */

    const cors = require('cors');
    const uuid = require('uuid').v4;
    const next = require('next');
    const Pusher = require('pusher');
    const logger = require('morgan');
    const express = require('express');
    const bodyParser = require('body-parser');
    const dotenv = require('dotenv').config();

    const dev = process.env.NODE_ENV !== 'production';
    //const port = process.env.PORT || 3000;
    const port = 3000;
    
    const app = next({ dev });
    const handler = app.getRequestHandler();

    // Ensure that your pusher credentials are properly set in the .env file
    // Using the specified variables
    const pusher = new Pusher({
      appId: process.env.PUSHER_APP_ID,
      key: process.env.PUSHER_APP_KEY,
      secret: process.env.PUSHER_APP_SECRET,
      cluster: process.env.PUSHER_APP_CLUSTER,
      encrypted: true
    });

    app.prepare()
      .then(() => {
          

        const server = express();

        server.use(cors());
        server.use(logger('dev'));
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }));
        
        
        const initializePeople = ({ lat, lng }) => {

          const randomInRange = num => (width = 0.01) => ((Math.random() * width * 2) + num - width);

          const randomLat = randomInRange(lat);
          const randomLng = randomInRange(lng);

          
          /*TO DO: this part need to read from database*/
          //const people = [ 'Parents' ];
          
          const people = [ 
          {name:"Parents",id:uuid(),position: { lat: 3.010468, lng: 101.452322 },online:true},
          {name:"Botanic",id:uuid(),position:{ lat: 2.9871224, lng: 101.4452828 },online:true}
          ];
          
          return people;
          

        };
        
        const referencePosition = { lat: 2.9871224, lng: 101.4452828 };
        
        let people = initializePeople(referencePosition);
        console.log(people)
        
        
        server.get('/people', (req, res, next) => {
          res.json({ status: 'success', people });
        });
        
        
        server.post('/transit/:id', (req, res, next) => {
          const id = req.params.id;
          const { lat, lng } = req.body;

          people.forEach((person, index) => {
            if (person.id === id) {
              people[index] = { ...person, position: { lat, lng } };

              pusher.trigger('map-geofencing', 'transit', {
                person: people[index], people
              });
            }
          });
        });
        
        server.post('/:presence/:id', (req, res, next) => {
          const id = req.params.id;
          const presence = req.params.presence;

          if (['online', 'offline'].includes(presence)) {
            people.forEach((person, index) => {
              if (person.id === id) {
                return people[index] = { ...person, online: presence === 'online' };
              }
            });
          }
        });
        
        
        server.get('*', (req, res) => {
          return handler(req, res);
        });

        server.listen(port, err => {
          if (err) throw err;
          console.log(`> Ready on http://localhost:${port}`);
        });

      })
      .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
      });