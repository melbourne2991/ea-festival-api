"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PrinterService", {
    enumerable: true,
    get: function() {
        return PrinterService;
    }
});
var _festivalsDataFormatter = require("./festivals-data-formatter");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var PrinterService = function PrinterService(festivalsService, logger) {
    "use strict";
    var _this = this;
    _classCallCheck(this, PrinterService);
    this.festivalsService = festivalsService;
    this.logger = logger;
    this.print = function() {
        _this.logger.info("printing festival data");
        _this.festivalsService.getFestivalsData().then(function(data) {
            return _festivalsDataFormatter.FestivalsDataFormatter.formatFestivalData(data.recordLabels, data.bands);
        }).then(console.log).catch(function(err) {
            _this.logger.error({
                msg: "Unknown error",
                err: err
            });
            process.exit(1);
        });
    };
};
