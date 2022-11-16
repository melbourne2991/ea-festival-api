"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FestivalsDataFormatter", {
    enumerable: true,
    get: function() {
        return FestivalsDataFormatter;
    }
});
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var FestivalsDataFormatter = /*#__PURE__*/ function() {
    "use strict";
    function FestivalsDataFormatter() {
        var _this = this;
        _classCallCheck(this, FestivalsDataFormatter);
        this.names = {
            band: new Map(),
            festival: new Map(),
            recordLabel: new Map()
        };
        this.unnamedCounts = {
            band: 0,
            festival: 0,
            recordLabel: 0
        };
        /**
   * This ensures if we have multiple unnamed bands or festivals (empty strings),
   * they still get different names to distinguish between them.
   * 
   * i.e we assume two festivals represented as two distinct objects in the array 
   * with the name `""` are NOT the same festival.
   */ this.getName = function(key, item, fallback) {
            var _item_name;
            var name = _this.names[key].get(item.id);
            if (name) {
                return name;
            }
            name = !((_item_name = item.name) === null || _item_name === void 0 ? void 0 : _item_name.trim()) ? "Unnamed ".concat(fallback, " (").concat(_this.unnamedCounts[key]++, ")") : item.name;
            _this.names[key].set(item.id, name);
            return name;
        };
        this.formatFestivalData = function(recordLabels, bands) {
            var noLabelBands = bands.filter(function(band) {
                return band.recordLabel === undefined;
            });
            var recordLabelsToFormat = noLabelBands.length ? _toConsumableArray(recordLabels).concat([
                {
                    // Assign a special id to this record label
                    // To ensure no collisions we use a symbol
                    id: Symbol("No Label"),
                    name: "[No label]",
                    bands: noLabelBands
                }
            ]) : recordLabels;
            return _this.formatRecordLabels(recordLabelsToFormat);
        };
        this.formatFestivals = function(festivals) {
            return festivals.map(function(festival) {
                var name = _this.getName("festival", festival, "Festival");
                return "".concat(FestivalsDataFormatter.indent(6)).concat(name, "\n");
            }).join("");
        };
        this.formatBands = function(bands) {
            return bands.map(function(band) {
                var name = _this.getName("band", band, "Band");
                return "".concat(FestivalsDataFormatter.indent(3)).concat(name, "\n").concat(_this.formatFestivals(band.festivals));
            }).join("");
        };
        this.formatRecordLabels = function(recordLabels) {
            if (!recordLabels.length) {
                return "No data to display.\n";
            }
            return recordLabels.map(function(recordLabel) {
                var name = _this.getName("recordLabel", recordLabel, "Record Label");
                return "".concat(name, "\n").concat(_this.formatBands(recordLabel.bands), "\n");
            }).join("");
        };
    }
    FestivalsDataFormatter.formatFestivalData = function formatFestivalData(recordLabels, bands) {
        var formatter = new this();
        return formatter.formatFestivalData(recordLabels, bands);
    };
    FestivalsDataFormatter.indent = function indent(count) {
        return new Array(count).fill(" ").join("");
    };
    return FestivalsDataFormatter;
}();
