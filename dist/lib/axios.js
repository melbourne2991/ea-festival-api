"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "axiosInstance", {
    enumerable: true,
    get: function() {
        return axiosInstance;
    }
});
var _axios = /*#__PURE__*/ _interopRequireDefault(require("axios"));
var _axiosRetry = /*#__PURE__*/ _interopRequireDefault(require("axios-retry"));
var _logger = require("./logger");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var axiosInstance = _axios.default.create({
    headers: {
        "Accept": "application/json"
    }
});
var backoff = function(retryCount) {
    return Math.pow(2, retryCount) * 100;
};
/**
 * Apply axios retry to our instance with exponential backoff for 429s
 */ (0, _axiosRetry.default)(axiosInstance, {
    retries: 5,
    retryDelay: function(count) {
        return backoff(count);
    },
    retryCondition: function(error) {
        var _error_response;
        return ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.status) === 429;
    },
    onRetry: function(count, err) {
        var _err_response;
        _logger.logger.warn("Got ".concat((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.status, " from API, retrying ... (").concat(count, ")"));
    }
});
