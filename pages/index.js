/* pages/index.js */

    import React, { Component, Fragment } from 'react';
    import axios from 'axios';
    import Pusher from 'pusher-js';
    import Layout from '../components/Layout';
    import ChoosePersona from '../components/ChoosePersona'
    import NearbyFriends from '../components/NearbyFriends';
    import Map from '../components/Map';

    class IndexPage extends Component {
      
      /*global navigator*/
      
      regionFiltered = people => this.nearby.updatePeople(people)

      state = { id: null, people: [],me:null }

      endConnection = () => {
        this.pusher.disconnect();
        axios.post(`/offline/${this.state.id}`);
      }

      componentWillMount() {
        this.pusher = new Pusher(process.env.PUSHER_APP_KEY, {
          cluster: process.env.PUSHER_APP_CLUSTER,
          encrypted: true
        });

        this.channel = this.pusher.subscribe('map-geofencing');
      }

      componentDidMount() {
        console.log("get my location")
        //get my current location
        if ('geolocation' in navigator) {
          
          navigator.geolocation.getCurrentPosition(function(position) {
          const myLocation =   { lat: position.coords.latitude, lng: position.coords.longitude };
          console.log("My Location:"+myLocation);
          this.state.me = myLocation;   
          
        });  
       }
        
        
        
        axios.get('/people').then(({ data }) => {
          const { people = [] } = data;
          this.setState({ people });
        });

        window.onbeforeunload = this.endConnection;
      }

      componentWillUnmount() {
        this.endConnection();
      }
      
      
      personaSelected = id => {
        this.setState({ id });
        axios.post(`/online/${id}`);
      }

      render() {

        const { id, people } = this.state;
        const person = people.find(person => person.id === id) || {};
       
       // const peopleOffline = people.filter(person => !person.online);

       return (
          <Layout pageTitle="Realtime Geofencing">
            <main className="container-fluid position-absolute h-100 bg-light">
              {
                id ? <div className="row position-absolute w-100 h-100">

                  <section className="col-md-9 px-0 border-right border-gray position-relative h-100">
                    <Map person={person} radius={1000} people={people} channel={this.channel} onRegionFiltered={this.regionFiltered} me={this.state.me} />
                  </section>

                  <section className="col-md-3 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0">
                    <NearbyFriends ref={elem => this.nearby = elem} person={person} />
                  </section>

                </div>
                : <ChoosePersona count={5} people={people} onSelected={this.personaSelected} />
              }
            </main>
          </Layout>
        );

      }

    };

    export default () => <IndexPage />