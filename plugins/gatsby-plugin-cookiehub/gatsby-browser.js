"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

exports.onRouteUpdate = function (_ref) {
  var location = _ref.location;
  var consent = !window.GATSBY_PLUGIN_COOKIEHUB_DISABLED_ANALYTICS;
  var trackingId = window.GATSBY_PLUGIN_COOKIEHUB_GA_TRACKING_ID;
  var anonymize = window.GATSBY_PLUGIN_COOKIEHUB_ANONYMIZE || false;

  if (!trackingId || process.env.NODE_ENV !== "production" || typeof gtag !== "function") {
    return;
  }

  var locationStr = '';

  if (location) {
    locationStr = "" + location.pathname + location.search + location.hash;
  }

  var anonymizeObj = {};

  if (anonymize) {
    anonymizeObj = {
      anonymize_ip: true
    };
  }

  if (consent) {
    gtag('config', trackingId, (0, _extends2.default)({
      page_path: locationStr
    }, anonymizeObj));
  }
};