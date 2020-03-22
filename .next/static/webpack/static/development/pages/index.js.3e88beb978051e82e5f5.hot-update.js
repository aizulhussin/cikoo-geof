webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MapContainer.js":
/*!************************************!*\
  !*** ./components/MapContainer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _UserMarker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UserMarker */ "./components/UserMarker.js");
/* harmony import */ var _PersonMarker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PersonMarker */ "./components/PersonMarker.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* components/MapContainer.js */






var MapContainer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MapContainer, _Component);

  var _super = _createSuper(MapContainer);

  function MapContainer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MapContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "analyzeRegion", function (position, radius) {
      return function (people) {
        var _this$props$onRegionF = _this.props.onRegionFiltered,
            onRegionFiltered = _this$props$onRegionF === void 0 ? function (f) {
          return f;
        } : _this$props$onRegionF;

        var withinRegion = _this.withinRegion(position, radius);

        var mappedPeople = people.map(function (person) {
          var _ref = person || {},
              position = _ref.position;

          var within = withinRegion(position);
          return _objectSpread({}, person, {
            within: within
          });
        });
        onRegionFiltered(mappedPeople);
      };
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "withinRegion", function (position, radius) {
      var to = new google.maps.LatLng(position.lat, position.lng);
      var distance = google.maps.geometry.spherical.computeDistanceBetween;
      return function (point) {
        var from = new google.maps.LatLng(point.lat, point.lng);
        return distance(from, to) <= radius;
      };
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MapContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$person = _this$props.person,
          id = _this$props$person.id,
          position = _this$props$person.position,
          radius = _this$props.radius,
          _this$props$people = _this$props.people,
          people = _this$props$people === void 0 ? [] : _this$props$people,
          _this$props$channel = _this$props.channel,
          channel = _this$props$channel === void 0 ? null : _this$props$channel,
          _this$props$me = _this$props.me,
          me = _this$props$me === void 0 ? {
        me: me
      } : _this$props$me;
      var mapContext = this.map.context['__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'];
      var setMapCenter = mapContext.setCenter.bind(mapContext);
      console.log("Me" + me);
      var lat = position.lat,
          lng = position.lng;
      channel && channel.bind('transit', function (_ref2) {
        var _ref2$person = _ref2.person,
            person = _ref2$person === void 0 ? {} : _ref2$person,
            people = _ref2.people;
        var $id = person.id,
            $position = person.position;
        var isUser = id === $id;
        var center = isUser ? $position : position;
        isUser && setMapCenter(center);

        _this2.analyzeRegion(center, radius)(people);
      });
      this.positionUpdate = setInterval(function () {
        lat = lat + Math.random() * 0.001;
        lng = lng + Math.random() * 0.001;
        axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("/transit/".concat(id), {
          lat: lat,
          lng: lng
        });
      }, 10000);
      this.analyzeRegion(position, radius)(people);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.positionUpdate);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          _this$props2$person = _this$props2.person,
          id = _this$props2$person.id,
          position = _this$props2$person.position,
          radius = _this$props2.radius,
          people = _this$props2.people,
          channel = _this$props2.channel;
      return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_10__["GoogleMap"], {
        ref: function ref(elem) {
          return _this3.map = elem;
        },
        zoom: 10,
        center: position
      }, __jsx(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], null, people.map(function (person, index) {
        var props = {
          key: index,
          radius: radius,
          person: person,
          channel: channel
        };

        var withinRegion = function withinRegion(point) {
          return function (position, radius) {
            return _this3.withinRegion(position, radius)(point);
          };
        };

        return person.id === id ? __jsx(_UserMarker__WEBPACK_IMPORTED_MODULE_11__["default"], props) : __jsx(_PersonMarker__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          user: _this3.props.person,
          withinRegion: withinRegion
        }, props));
      })));
    }
  }]);

  return MapContainer;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_google_maps__WEBPACK_IMPORTED_MODULE_10__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_10__["withGoogleMap"])(MapContainer)));

/***/ })

})
//# sourceMappingURL=index.js.3e88beb978051e82e5f5.hot-update.js.map