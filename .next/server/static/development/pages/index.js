module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ChoosePersona.js":
/*!*************************************!*\
  !*** ./components/ChoosePersona.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* components/ChoosePersona.js */


const ChoosePersona = props => {
  const {
    people = [],
    count = 3,
    onSelected = f => f
  } = props;
  const nameBadgeStyles = {
    fontSize: '0.8rem',
    height: 40,
    borderRadius: 20,
    cursor: 'pointer'
  };

  const choosePersona = id => evt => onSelected(id);

  const renderPeople = people => {
    console.log(people);
    return people.map(index => {
      const {
        id,
        name
      } = people[index];
      const className = 'd-flex align-items-center text-center text-white bg-secondary font-weight-bold py-2 px-4 mx-1 my-2';
      return __jsx("span", {
        key: index,
        className: className,
        style: nameBadgeStyles,
        title: name,
        onClick: choosePersona(id)
      }, name);
    });
  };

  const randomPeople = count => people => {
    console.log(JSON.stringify(people));
    const selected = [];
    let i = 0;
    count = Math.max(0, Math.min(count, people.length));

    while (i < count) {
      const index = Math.floor(Math.random() * people.length);
      if (selected.includes(index)) continue;
      ++i && selected.push(index);
    }

    return selected.map(index => {
      const {
        id,
        name
      } = people[index];
      const className = 'd-flex align-items-center text-center text-white bg-secondary font-weight-bold py-2 px-4 mx-1 my-2';
      return __jsx("span", {
        key: index,
        className: className,
        style: nameBadgeStyles,
        title: name,
        onClick: choosePersona(id)
      }, name);
    });
  };

  return __jsx("div", {
    className: "w-100 h-100 px-3 pb-5 d-flex flex-wrap align-items-center align-content-center justify-content-center"
  }, __jsx("span", {
    className: "h3 text-dark text-center py-3 w-100 font-weight-bold"
  }, "Friends"), randomPeople(count)(people));
};

/* harmony default export */ __webpack_exports__["default"] = (ChoosePersona);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* components/Layout.js */



const Layout = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
  charSet: "utf-8"
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1, shrink-to-fit=no"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
  integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
  crossOrigin: "anonymous"
}), __jsx("title", null, props.pageTitle || 'Cikoo GeoFence')), props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapContainer */ "./components/MapContainer.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* components/Map.js */


const API_KEY = "AIzaSyC7wPfhKpWwHzPJ73Ok1iezZP5RZ11Wy9I";
const MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry`;

class Map extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const containerStyles = {
      height: '100%',
      width: '100%',
      position: 'relative'
    };
    return __jsx(_MapContainer__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      googleMapURL: MAP_URL,
      loadingElement: __jsx("div", {
        style: containerStyles
      }),
      containerElement: __jsx("div", {
        style: containerStyles
      }),
      mapElement: __jsx("div", {
        style: containerStyles
      })
    }, this.props));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./components/MapContainer.js":
/*!************************************!*\
  !*** ./components/MapContainer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserMarker */ "./components/UserMarker.js");
/* harmony import */ var _PersonMarker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PersonMarker */ "./components/PersonMarker.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* components/MapContainer.js */






class MapContainer extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "analyzeRegion", (position, radius) => people => {
      const {
        onRegionFiltered = f => f
      } = this.props;
      const withinRegion = this.withinRegion(position, radius);
      const mappedPeople = people.map(person => {
        const {
          position
        } = person || {};
        const within = withinRegion(position);
        return _objectSpread({}, person, {
          within
        });
      });
      onRegionFiltered(mappedPeople);
    });

    _defineProperty(this, "withinRegion", (position, radius) => {
      const to = new google.maps.LatLng(position.lat, position.lng);
      const distance = google.maps.geometry.spherical.computeDistanceBetween;
      return point => {
        const from = new google.maps.LatLng(point.lat, point.lng);
        return distance(from, to) <= radius;
      };
    });
  }

  componentDidMount() {
    const {
      person: {
        id,
        position
      },
      radius,
      people = [],
      channel = null,
      me = {
        me
      }
    } = this.props;
    const mapContext = this.map.context['__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'];
    const setMapCenter = mapContext.setCenter.bind(mapContext);
    console.log("Me" + me);
    let {
      lat,
      lng
    } = position;
    channel && channel.bind('transit', ({
      person = {},
      people
    }) => {
      const {
        id: $id,
        position: $position
      } = person;
      const isUser = id === $id;
      const center = isUser ? $position : position;
      isUser && setMapCenter(center);
      this.analyzeRegion(center, radius)(people);
    });
    this.positionUpdate = setInterval(() => {
      lat = lat + Math.random() * 0.001;
      lng = lng + Math.random() * 0.001;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/transit/${id}`, {
        lat,
        lng
      });
    }, 10000);
    this.analyzeRegion(position, radius)(people);
  }

  componentWillUnmount() {
    clearInterval(this.positionUpdate);
  }

  render() {
    const {
      person: {
        id,
        position
      },
      radius,
      people,
      channel
    } = this.props;
    return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMap"], {
      ref: elem => this.map = elem,
      zoom: 14,
      center: position
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, people.map((person, index) => {
      const props = {
        key: index,
        radius,
        person,
        channel
      };

      const withinRegion = point => (position, radius) => this.withinRegion(position, radius)(point);

      return person.id === id ? __jsx(_UserMarker__WEBPACK_IMPORTED_MODULE_3__["default"], props) : __jsx(_PersonMarker__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
        user: this.props.person,
        withinRegion: withinRegion
      }, props));
    })));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withGoogleMap"])(MapContainer)));

/***/ }),

/***/ "./components/NearbyFriends.js":
/*!*************************************!*\
  !*** ./components/NearbyFriends.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* components/NearbyFriends.js */

const BLACK_MARKER = 'https://i.imgur.com/8dOrls4.png?2';
const GREEN_MARKER = 'https://i.imgur.com/9v6uW8U.png';

class NearbyFriends extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      people: []
    });

    _defineProperty(this, "updatePeople", people => this.setState({
      people
    }));
  }

  render() {
    const {
      people
    } = this.state;
    const {
      person: {
        name,
        id
      }
    } = this.props;
    const nameBadgeStyles = {
      fontSize: '0.8rem',
      height: 40,
      borderRadius: 20,
      cursor: 'pointer'
    };

    const showPeople = (filterFn, marker) => {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, people.filter(filterFn).map((person, index) => {
        if (person.id === id) return null;
        return __jsx("div", {
          key: index,
          className: "d-flex border-bottom border-gray w-100 px-4 py-3 font-weight-bold text-secondary align-items-center"
        }, __jsx("div", {
          className: "pl-2",
          style: {
            width: 30,
            height: 30
          }
        }, __jsx("img", {
          src: marker,
          className: "img-fluid",
          alt: "marker"
        })), __jsx("span", {
          className: "pl-3"
        }, person.name));
      }));
    };

    return id && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
      className: "border-bottom border-gray w-100 px-2 d-flex align-items-center bg-white justify-content-between",
      style: {
        height: 90
      }
    }, __jsx("span", {
      className: "h4 text-dark mb-0 mx-4 font-weight-bold"
    }, "Nearby Friends"), __jsx("span", {
      className: "d-flex align-items-center text-center text-white bg-primary font-weight-bold py-2 px-4 mx-4",
      style: nameBadgeStyles,
      title: name
    }, name)), __jsx("div", {
      className: "w-100 d-flex flex-wrap align-items-start align-content-start position-relative",
      style: {
        height: 'calc(100% - 90px)',
        overflowY: 'auto'
      }
    }, showPeople(person => person.within, GREEN_MARKER), showPeople(person => !person.within, BLACK_MARKER)));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (NearbyFriends);

/***/ }),

/***/ "./components/PersonMarker.js":
/*!************************************!*\
  !*** ./components/PersonMarker.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* components/PersonMarker.js */


const BLACK_MARKER = 'https://i.imgur.com/8dOrls4.png?2';
const GREEN_MARKER = 'https://i.imgur.com/9v6uW8U.png';

class PersonMarker extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  /*global google*/
  constructor(props) {
    super(props);
    const {
      user: {
        id: userID,
        position: userPosition
      },
      person: {
        id = null,
        position = null
      },
      channel = null
    } = this.props;
    this.id = id;
    this.userID = userID;
    this.channel = channel;
    this.state = {
      position,
      userPosition
    };
  }

  componentDidMount() {
    this.channel && this.channel.bind('transit', ({
      person = {}
    }) => {
      const {
        id,
        position
      } = person;
      id === this.id && this.setState({
        position
      });
      id === this.userID && this.setState({
        userPosition: position
      });
    });
  }

  render() {
    const {
      position,
      userPosition
    } = this.state;
    const {
      person: {
        name
      },
      radius,
      withinRegion = f => f
    } = this.props;
    const within = !!withinRegion(position)(userPosition, radius);
    const MARKER_SIZE = new google.maps.Size(25, 35);
    const MARKER_ICON = within ? GREEN_MARKER : BLACK_MARKER;
    return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
      position: position,
      title: name,
      options: {
        icon: {
          url: MARKER_ICON,
          scaledSize: MARKER_SIZE
        }
      }
    });
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (PersonMarker);

/***/ }),

/***/ "./components/UserMarker.js":
/*!**********************************!*\
  !*** ./components/UserMarker.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class UserMarker extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  /*global google*/
  constructor(props) {
    super(props);
    const {
      person: {
        id = null,
        position = null
      },
      channel = null
    } = this.props;
    this.id = id;
    this.channel = channel;
    this.state = {
      position
    };
  }

  componentDidMount() {
    this.channel && this.channel.bind('transit', ({
      person = {}
    }) => {
      const {
        id,
        position
      } = person;
      id === this.id && this.setState({
        position
      });
    });
  }

  render() {
    const {
      radius
    } = this.props;
    const {
      position
    } = this.state;
    const regionOptions = {
      fillOpacity: 0.1,
      strokeWidth: 1,
      strokeOpacity: 0.2
    };
    const MARKER_SIZE = new google.maps.Size(50, 70);
    const MARKER_ICON = 'https://i.imgur.com/Rhv5xQh.png';
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
      position: position,
      title: "You",
      options: {
        icon: {
          url: MARKER_ICON,
          scaledSize: MARKER_SIZE
        }
      }
    }), __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Circle"], {
      center: position,
      radius: radius,
      options: regionOptions
    }));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (UserMarker);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pusher-js */ "pusher-js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_ChoosePersona__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ChoosePersona */ "./components/ChoosePersona.js");
/* harmony import */ var _components_NearbyFriends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NearbyFriends */ "./components/NearbyFriends.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Map */ "./components/Map.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* pages/index.js */








class IndexPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "regionFiltered", people => this.nearby.updatePeople(people));

    _defineProperty(this, "state", {
      id: null,
      people: [],
      me: null
    });

    _defineProperty(this, "endConnection", () => {
      this.pusher.disconnect();
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/offline/${this.state.id}`);
    });

    _defineProperty(this, "personaSelected", id => {
      this.setState({
        id
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/online/${id}`);
    });
  }

  componentWillMount() {
    this.pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_2___default.a("ffb518ceb19b7c04622b", {
      cluster: "ap1",
      encrypted: true
    });
    this.channel = this.pusher.subscribe('map-geofencing');
  }

  componentDidMount() {
    console.log("get my location"); //get my current location

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const myLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log("My Location:" + myLocation);
        this.state.me = myLocation;
      });
    }

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/people').then(({
      data
    }) => {
      const {
        people = []
      } = data;
      this.setState({
        people
      });
    });
    window.onbeforeunload = this.endConnection;
  }

  componentWillUnmount() {
    this.endConnection();
  }

  render() {
    const {
      id,
      people
    } = this.state;
    const person = people.find(person => person.id === id) || {}; // const peopleOffline = people.filter(person => !person.online);

    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      pageTitle: "Realtime Geofencing"
    }, __jsx("main", {
      className: "container-fluid position-absolute h-100 bg-light"
    }, id ? __jsx("div", {
      className: "row position-absolute w-100 h-100"
    }, __jsx("section", {
      className: "col-md-9 px-0 border-right border-gray position-relative h-100"
    }, __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_6__["default"], {
      person: person,
      radius: 1000,
      people: people,
      channel: this.channel,
      onRegionFiltered: this.regionFiltered,
      me: this.state.me
    })), __jsx("section", {
      className: "col-md-3 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0"
    }, __jsx(_components_NearbyFriends__WEBPACK_IMPORTED_MODULE_5__["default"], {
      ref: elem => this.nearby = elem,
      person: person
    }))) : __jsx(_components_ChoosePersona__WEBPACK_IMPORTED_MODULE_4__["default"], {
      count: 5,
      people: people,
      onSelected: this.personaSelected
    })));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(IndexPage, null));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/environment/cikoo-geof/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "pusher-js":
/*!****************************!*\
  !*** external "pusher-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-google-maps":
/*!************************************!*\
  !*** external "react-google-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map