"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "axiosInstance", {
    enumerable: true,
    get: function() {
        return _axios.axiosInstance;
    }
});
var _axios = require("./axios");
var _axiosMockAdapter = /*#__PURE__*/ _interopRequireDefault(require("axios-mock-adapter"));
var _config = require("../config");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var mock = new _axiosMockAdapter.default(_axios.axiosInstance);
var scenarios = {
    basic: function() {
        mock.onGet("".concat(_config.config.apiBaseUrl, "/api/v1/festivals")).reply(200, [
            {
                name: "Festival e2e 1",
                bands: [
                    {
                        name: "Cool band",
                        recordLabel: "That label"
                    }
                ]
            },
            {
                name: "Festival e2e 2",
                bands: [
                    {
                        name: "Another band",
                        recordLabel: "Another label"
                    }
                ]
            }
        ], {
            "Content-Type": "application/json"
        });
    },
    "rate-limited": function() {
        mock.onGet("".concat(_config.config.apiBaseUrl, "/api/v1/festivals")).replyOnce(429, "Rate limited").onGet("".concat(_config.config.apiBaseUrl, "/api/v1/festivals")).replyOnce(429, "Rate limited").onGet("".concat(_config.config.apiBaseUrl, "/api/v1/festivals")).replyOnce(200, [
            {
                name: "Festival e2e 1",
                bands: [
                    {
                        name: "Cool band",
                        recordLabel: "That label"
                    }
                ]
            },
            {
                name: "Festival e2e 2",
                bands: [
                    {
                        name: "Another band",
                        recordLabel: "Another label"
                    }
                ]
            }
        ]);
    }
};
scenarios[_config.config.testScenario]();
