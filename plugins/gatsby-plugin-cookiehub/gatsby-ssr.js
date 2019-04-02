"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _commonTags = require("common-tags");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2.default)(["\n    window.addEventListener(\"load\", function() {\n      window.cookieconsent.initialise({\n        onInitialise: function(status) {\n          if (this.hasConsented('analytics')) {\n            window.GATSBY_PLUGIN_COOKIEHUB_DISABLED_ANALYTICS = false;\n            gtag('config', ", ");            \n          }\n        },\n        onAllow: function(category) {\n          if (category == 'analytics') {\n            window.GATSBY_PLUGIN_COOKIEHUB_DISABLED_ANALYTICS = false;\n            gtag('config', ", ");\n          }\n        },\n        onRevoke: function(category) {\n          if (category == 'analytics') {\n            window.GATSBY_PLUGIN_COOKIEHUB_DISABLED_ANALYTICS = true;\n          }\n        }\n      })\n    });  \n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2.default)(["\n    window.GATSBY_PLUGIN_COOKIEHUB_DISABLED_ANALYTICS = true;\n  \n    window.GATSBY_PLUGIN_COOKIEHUB_GA_TRACKING_ID = (\n      '", "'\n    );\n    window.GATSBY_PLUGIN_COOKIEHUB_ANONYMIZE = ", ";\n\n    let options = undefined;\n\n    if (", ") {\n      options = {\n        anonymize_ip: true\n      };\n    }\n\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());    \n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var COOKIHUB_SRC = "https://cookiehub.net/cc/";
var GTAG_SRC = "https://www.googletagmanager.com/gtag/js";

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents,
      setPostBodyComponents = _ref.setPostBodyComponents;

  if (!pluginOptions.cookihubId || !pluginOptions.gtagId) {
    return null;
  }

  var anonymize = pluginOptions.anonymize || false;

  var cookieHubScript = _react.default.createElement("script", {
    key: "gatsby-plugin-cookihub-cookihub-js",
    src: "" + COOKIHUB_SRC + pluginOptions.cookihubId + ".js"
  });

  var gtagScript = _react.default.createElement("script", {
    async: true,
    key: "gatsby-plugin-cookihub-gtag-js",
    src: GTAG_SRC + "?id=" + pluginOptions.trackingId
  });

  var setupScriptStr = (0, _commonTags.stripIndent)(_templateObject(), pluginOptions.trackingId, anonymize, anonymize);

  var setupScript = _react.default.createElement("script", {
    key: "gatsby-plugin-cookihub-setup",
    dangerouslySetInnerHTML: {
      __html: setupScriptStr
    }
  });

  var consentScriptStr = (0, _commonTags.stripIndent)(_templateObject2(), pluginOptions.trackingId, pluginOptions.trackingId);

  var consentScript = _react.default.createElement("script", {
    key: "gatsby-plugin-cookihub-consent",
    dangerouslySetInnerHTML: {
      __html: consentScriptStr
    }
  });

  var setComponents = pluginOptions.head ? setHeadComponents : setPostBodyComponents;
  return setComponents([gtagScript, setupScript, cookieHubScript, consentScript]);
};