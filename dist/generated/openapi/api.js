/* tslint:disable */ /* eslint-disable */ /**
 * Energy Australia Coding Test API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    FestivalsApiAxiosParamCreator: function() {
        return FestivalsApiAxiosParamCreator;
    },
    FestivalsApiFp: function() {
        return FestivalsApiFp;
    },
    FestivalsApiFactory: function() {
        return FestivalsApiFactory;
    },
    FestivalsApi: function() {
        return FestivalsApi;
    }
});
var _axios = /*#__PURE__*/ _interopRequireDefault(require("axios"));
var _common = require("./common");
var _base = require("./base");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
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
var FestivalsApiAxiosParamCreator = function FestivalsApiAxiosParamCreator(configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ aPIFestivalsGet: /*#__PURE__*/ _asyncToGenerator(function() {
            var options, localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
            var _arguments = arguments;
            return __generator(this, function(_state) {
                options = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : {};
                localVarPath = "/api/v1/festivals";
                localVarUrlObj = new URL(localVarPath, _common.DUMMY_BASE_URL);
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                localVarRequestOptions = _objectSpread({
                    method: "GET"
                }, baseOptions, options);
                localVarHeaderParameter = {};
                localVarQueryParameter = {};
                (0, _common.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, headersFromBaseOptions, options.headers);
                return [
                    2,
                    {
                        url: (0, _common.toPathString)(localVarUrlObj),
                        options: localVarRequestOptions
                    }
                ];
            });
        })
    };
};
var FestivalsApiFp = function FestivalsApiFp(configuration) {
    var localVarAxiosParamCreator = FestivalsApiAxiosParamCreator(configuration);
    return {
        aPIFestivalsGet: /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ function aPIFestivalsGet(options) {
            return _asyncToGenerator(function() {
                var localVarAxiosArgs;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                localVarAxiosParamCreator.aPIFestivalsGet(options)
                            ];
                        case 1:
                            localVarAxiosArgs = _state.sent();
                            return [
                                2,
                                (0, _common.createRequestFunction)(localVarAxiosArgs, _axios.default, _base.BASE_PATH, configuration)
                            ];
                    }
                });
            })();
        }
    };
};
var FestivalsApiFactory = function FestivalsApiFactory(configuration, basePath, axios) {
    var localVarFp = FestivalsApiFp(configuration);
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ aPIFestivalsGet: function aPIFestivalsGet(options) {
            return localVarFp.aPIFestivalsGet(options).then(function(request) {
                return request(axios, basePath);
            });
        }
    };
};
var FestivalsApi = /*#__PURE__*/ function(BaseAPI) {
    "use strict";
    _inherits(FestivalsApi, BaseAPI);
    var _super = _createSuper(FestivalsApi);
    function FestivalsApi() {
        _classCallCheck(this, FestivalsApi);
        return _super.apply(this, arguments);
    }
    var _proto = FestivalsApi.prototype;
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FestivalsApi
     */ _proto.aPIFestivalsGet = function aPIFestivalsGet(options) {
        var _this = this;
        return FestivalsApiFp(this.configuration).aPIFestivalsGet(options).then(function(request) {
            return request(_this.axios, _this.basePath);
        });
    };
    return FestivalsApi;
}(_base.BaseAPI);