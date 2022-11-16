"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "logger", {
    enumerable: true,
    get: function() {
        return logger;
    }
});
var _bunyan = /*#__PURE__*/ _interopRequireDefault(require("bunyan"));
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var PrettyLogStream = /*#__PURE__*/ function() {
    "use strict";
    function PrettyLogStream() {
        _classCallCheck(this, PrettyLogStream);
    }
    var _proto = PrettyLogStream.prototype;
    _proto.write = function write(chunk) {
        var log = chunk;
        console.log("[%s] %s: %s", log.time.toISOString(), _bunyan.default.nameFromLevel[log.level], log.msg);
    };
    return PrettyLogStream;
}();
var logger = _bunyan.default.createLogger({
    name: "ea-coding-test",
    streams: [
        {
            level: "info",
            stream: new PrettyLogStream(),
            type: "raw"
        }
    ]
});
