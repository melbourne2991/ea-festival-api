// import { axiosInstance } from "./lib/axios";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _config = require("./config");
var _openapi = require("./generated/openapi");
var _festivalsService = require("./services/festivals.service");
var _logger = require("./lib/logger");
var _printerService = require("./services/printer.service");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var isTest = Boolean(_config.config.testScenario);
/**
 * Conditionally import axios instance based on whether this is a test
 * In the case of tests we mock the api responses.
 */ Promise.resolve(isTest ? "./lib/axios-mock" : "./lib/axios").then(function(p) {
    return /*#__PURE__*/ _interopRequireWildcard(require(p));
}).then(function(param) {
    var axiosInstance = param.axiosInstance;
    return axiosInstance;
}).then(function(axiosInstance) {
    var festivalsApi = new _openapi.FestivalsApi(undefined, _config.config.apiBaseUrl, axiosInstance);
    var festivalsService = new _festivalsService.FestivalsService(festivalsApi, _logger.logger);
    var printerService = new _printerService.PrinterService(festivalsService, _logger.logger);
    printerService.print();
});
