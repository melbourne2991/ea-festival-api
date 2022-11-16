"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FestivalsDataMapper", {
    enumerable: true,
    get: function() {
        return FestivalsDataMapper;
    }
});
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var FestivalsDataMapper = /*#__PURE__*/ function() {
    "use strict";
    function FestivalsDataMapper(rawData) {
        _classCallCheck(this, FestivalsDataMapper);
        this.rawData = rawData;
        this.bands = {
            allIds: [],
            byId: {}
        };
        this.festivals = {
            allIds: [],
            byId: {}
        };
        this.recordLabels = {
            allIds: [],
            byId: {}
        };
        this.mapFestivals();
        this.bands.allIds = Object.keys(this.bands.byId);
        this.festivals.allIds = Object.keys(this.festivals.byId);
        this.recordLabels.allIds = Object.keys(this.recordLabels.byId);
    }
    var _proto = FestivalsDataMapper.prototype;
    _proto.mapFestivals = function mapFestivals() {
        var _this = this;
        return this.rawData.map(function(rawFestival, festivalIdx) {
            var festivalId = "".concat(festivalIdx);
            var festival = {
                id: festivalId,
                name: rawFestival.name,
                bands: []
            };
            if (rawFestival.bands) {
                festival.bands = _this.mapBands(festival, rawFestival.bands);
            }
            _this.festivals.byId[festivalId] = festival;
            return festivalId;
        });
    };
    _proto.mapBands = function mapBands(festival, bands) {
        var _this = this;
        return bands.map(function(rawBand, bandIdx) {
            var _rawBand_name;
            var bandId = (_rawBand_name = rawBand.name) !== null && _rawBand_name !== void 0 ? _rawBand_name : "".concat(festival.id).concat(bandIdx);
            var _this_bands_byId_bandId;
            _this.bands.byId[bandId] = (_this_bands_byId_bandId = _this.bands.byId[bandId]) !== null && _this_bands_byId_bandId !== void 0 ? _this_bands_byId_bandId : {
                id: bandId,
                name: rawBand.name,
                festivals: []
            };
            if (rawBand.recordLabel !== undefined) {
                _this.bands.byId[bandId].recordLabel = _this.mapRecordLabel(rawBand.recordLabel, festival, _this.bands.byId[bandId]);
            }
            _this.bands.byId[bandId].festivals.push(festival);
            return _this.bands.byId[bandId];
        });
    };
    _proto.mapRecordLabel = function mapRecordLabel(recordLabel, festival, band) {
        // If the band has a record label but the string is empty, we consider it unique, else we take the name as the id.
        var recordLabelId = recordLabel.trim() === "" ? "".concat(festival.id).concat(band.id) : recordLabel;
        var _this_recordLabels_byId_recordLabelId;
        this.recordLabels.byId[recordLabelId] = (_this_recordLabels_byId_recordLabelId = this.recordLabels.byId[recordLabelId]) !== null && _this_recordLabels_byId_recordLabelId !== void 0 ? _this_recordLabels_byId_recordLabelId : {
            id: recordLabelId,
            name: recordLabel,
            bands: []
        };
        this.recordLabels.byId[recordLabelId].bands.push(band);
        return this.recordLabels.byId[recordLabelId];
    };
    FestivalsDataMapper.mapFestivalData = function mapFestivalData() {
        var rawData = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        var mapped = new this(rawData);
        return {
            bands: mapped.bands.allIds.map(function(id) {
                return mapped.bands.byId[id];
            }),
            festivals: mapped.festivals.allIds.map(function(id) {
                return mapped.festivals.byId[id];
            }),
            recordLabels: mapped.recordLabels.allIds.map(function(id) {
                return mapped.recordLabels.byId[id];
            })
        };
    };
    return FestivalsDataMapper;
}();
