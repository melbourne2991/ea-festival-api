"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _openapi = require("../../generated/openapi");
var _festivalsService = require("../festivals.service");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var __generator = (void 0) && (void 0).__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
describe("FestivalService", function() {
    var service;
    var festivalsApi;
    beforeEach(function() {
        jest.clearAllMocks();
        festivalsApi = new _openapi.FestivalsApi();
        service = new _festivalsService.FestivalsService(festivalsApi, {
            info: function() {}
        });
    });
    it("getFestivalsData - should return data", /*#__PURE__*/ _asyncToGenerator(function() {
        var _results_bands_, _results_bands_1, _results_festivals_, _results_festivals_1, _results_recordLabels_, _results_recordLabels_1, festivals, results;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    festivals = [
                        {
                            name: "Festival 1",
                            bands: [
                                {
                                    name: "Cool band",
                                    recordLabel: "That label"
                                }
                            ]
                        },
                        {
                            name: "Festival 2",
                            bands: [
                                {
                                    name: "Another band",
                                    recordLabel: "Another label"
                                }
                            ]
                        }
                    ];
                    jest.spyOn(festivalsApi, "aPIFestivalsGet").mockImplementation().mockResolvedValue({
                        data: festivals
                    });
                    return [
                        4,
                        service.getFestivalsData()
                    ];
                case 1:
                    results = _state.sent();
                    expect(results.bands.length).toBe(2);
                    expect(results.festivals.length).toBe(2);
                    expect(results.recordLabels.length).toBe(2);
                    expect((_results_bands_ = results.bands[0]) === null || _results_bands_ === void 0 ? void 0 : _results_bands_.name).toBe("Cool band");
                    expect((_results_bands_1 = results.bands[1]) === null || _results_bands_1 === void 0 ? void 0 : _results_bands_1.name).toBe("Another band");
                    expect((_results_festivals_ = results.festivals[0]) === null || _results_festivals_ === void 0 ? void 0 : _results_festivals_.name).toBe("Festival 1");
                    expect((_results_festivals_1 = results.festivals[1]) === null || _results_festivals_1 === void 0 ? void 0 : _results_festivals_1.name).toBe("Festival 2");
                    expect((_results_recordLabels_ = results.recordLabels[0]) === null || _results_recordLabels_ === void 0 ? void 0 : _results_recordLabels_.name).toBe("That label");
                    expect((_results_recordLabels_1 = results.recordLabels[1]) === null || _results_recordLabels_1 === void 0 ? void 0 : _results_recordLabels_1.name).toBe("Another label");
                    return [
                        2
                    ];
            }
        });
    }));
    it("should return bands of the same name as one band", /*#__PURE__*/ _asyncToGenerator(function() {
        var _results_bands_, festivals, results;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    festivals = [
                        {
                            name: "Festival 1",
                            bands: [
                                {
                                    name: "Cool band",
                                    recordLabel: "That label"
                                }
                            ]
                        },
                        {
                            name: "Festival 2",
                            bands: [
                                {
                                    name: "Cool band",
                                    recordLabel: "Another label"
                                }
                            ]
                        }
                    ];
                    jest.spyOn(festivalsApi, "aPIFestivalsGet").mockImplementation().mockResolvedValue({
                        data: festivals
                    });
                    return [
                        4,
                        service.getFestivalsData()
                    ];
                case 1:
                    results = _state.sent();
                    expect(results.bands.length).toBe(1);
                    expect((_results_bands_ = results.bands[0]) === null || _results_bands_ === void 0 ? void 0 : _results_bands_.name).toBe("Cool band");
                    return [
                        2
                    ];
            }
        });
    }));
    it("should return record labels of the same name as one record label", /*#__PURE__*/ _asyncToGenerator(function() {
        var _results_recordLabels_, festivals, results;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    festivals = [
                        {
                            name: "Festival 1",
                            bands: [
                                {
                                    name: "Cool band",
                                    recordLabel: "That label"
                                }
                            ]
                        },
                        {
                            name: "Festival 2",
                            bands: [
                                {
                                    name: "Another band",
                                    recordLabel: "That label"
                                }
                            ]
                        }
                    ];
                    jest.spyOn(festivalsApi, "aPIFestivalsGet").mockImplementation().mockResolvedValue({
                        data: festivals
                    });
                    return [
                        4,
                        service.getFestivalsData()
                    ];
                case 1:
                    results = _state.sent();
                    expect(results.recordLabels.length).toBe(1);
                    expect((_results_recordLabels_ = results.recordLabels[0]) === null || _results_recordLabels_ === void 0 ? void 0 : _results_recordLabels_.name).toBe("That label");
                    return [
                        2
                    ];
            }
        });
    }));
    it("should relate bands to festivals, record labels to bands", /*#__PURE__*/ _asyncToGenerator(function() {
        var _results_festivals_, _results_recordLabels_, festivals, results, band;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    festivals = [
                        {
                            name: "Festival 1",
                            bands: [
                                {
                                    name: "Cool band",
                                    recordLabel: "That label"
                                }
                            ]
                        },
                        {
                            name: "Festival 2",
                            bands: [
                                {
                                    name: "Another band",
                                    recordLabel: "Another label"
                                }
                            ]
                        }
                    ];
                    jest.spyOn(festivalsApi, "aPIFestivalsGet").mockImplementation().mockResolvedValue({
                        data: festivals
                    });
                    return [
                        4,
                        service.getFestivalsData()
                    ];
                case 1:
                    results = _state.sent();
                    band = results.bands[0];
                    expect(band.festivals.includes(results.festivals[0])).toBe(true);
                    expect((_results_festivals_ = results.festivals[0]) === null || _results_festivals_ === void 0 ? void 0 : _results_festivals_.bands.includes(band)).toBe(true);
                    expect((_results_recordLabels_ = results.recordLabels[0]) === null || _results_recordLabels_ === void 0 ? void 0 : _results_recordLabels_.bands.includes(band)).toBe(true);
                    expect(band.recordLabel).toBe(results.recordLabels[0]);
                    return [
                        2
                    ];
            }
        });
    }));
    it("should treat empty-named record labels as different record labels", /*#__PURE__*/ _asyncToGenerator(function() {
        var festivals, results;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    festivals = [
                        {
                            name: "Festival 1",
                            bands: [
                                {
                                    name: "Cool band",
                                    recordLabel: ""
                                }
                            ]
                        },
                        {
                            name: "Festival 2",
                            bands: [
                                {
                                    name: "Another band",
                                    recordLabel: ""
                                }
                            ]
                        }
                    ];
                    jest.spyOn(festivalsApi, "aPIFestivalsGet").mockImplementation().mockResolvedValue({
                        data: festivals
                    });
                    return [
                        4,
                        service.getFestivalsData()
                    ];
                case 1:
                    results = _state.sent();
                    expect(results.recordLabels.length).toBe(2);
                    return [
                        2
                    ];
            }
        });
    }));
    it("should treat unnamed festivals as different festivals", /*#__PURE__*/ _asyncToGenerator(function() {
        var festivals, results;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    festivals = [
                        {
                            bands: [
                                {
                                    name: "Cool band",
                                    recordLabel: "That label"
                                }
                            ]
                        },
                        {
                            bands: [
                                {
                                    name: "Another band",
                                    recordLabel: "That other label"
                                }
                            ]
                        }
                    ];
                    jest.spyOn(festivalsApi, "aPIFestivalsGet").mockImplementation().mockResolvedValue({
                        data: festivals
                    });
                    return [
                        4,
                        service.getFestivalsData()
                    ];
                case 1:
                    results = _state.sent();
                    expect(results.festivals.length).toBe(2);
                    return [
                        2
                    ];
            }
        });
    }));
});
