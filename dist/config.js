"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "config", {
    enumerable: true,
    get: function() {
        return config;
    }
});
var _dotenv = /*#__PURE__*/ _interopRequireDefault(require("dotenv"));
var _util = require("./lib/util");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
_dotenv.default.config();
var config = {
    apiBaseUrl: (0, _util.requireEnvVar)("API_BASE_URL"),
    testScenario: process.env["TEST_SCENARIO"]
};
