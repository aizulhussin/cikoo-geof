 /* components/MapContainer.js */

    import axios from 'axios';
    import React, { Fragment, Component } from 'react';
    import { withGoogleMap, withScriptjs, GoogleMap } from 'react-google-maps';

    import UserMarker from './UserMarker';
    import PersonMarker from './PersonMarker';

    class MapContainer extends Component {
        
     /*global google*/    

      withinRegion = (position, radius) => {
        const to = new google.maps.LatLng(position.lat, position.lng);
        const distance = google.maps.geometry.spherical.computeDistanceBetween;
        return point => {
          const from = new google.maps.LatLng(point.lat, point.lng);
          return distance(from, to) <= radius;
        }
      }

      render() {
        const { person: { id, position }, radius, people, channel } = this.props;

        return (
          <GoogleMap ref={elem => this.map = elem} zoom={15} center={position}>
            <Fragment>
              { people.map((person, index) => {

                const props = { key: index, radius, person, channel };
                const withinRegion = point => (position, radius) => this.withinRegion(position, radius)(point);

                return (person.id === id)
                  ? <UserMarker {...props} />
                  : <PersonMarker user={this.props.person} withinRegion={withinRegion} {...props} />

              }) }
            </Fragment>
          </GoogleMap>
        );
      }

    };

    export default withScriptjs(withGoogleMap(MapContainer));