"use strict";
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
    makeBand: function() {
        return makeBand;
    },
    makeFestival: function() {
        return makeFestival;
    },
    makeRecordLabel: function() {
        return makeRecordLabel;
    },
    addBandToFestival: function() {
        return addBandToFestival;
    },
    addBandToRecordLabel: function() {
        return addBandToRecordLabel;
    }
});
var makeBand = function(id, name) {
    return {
        id: id,
        name: name,
        festivals: []
    };
};
var makeFestival = function(id, name) {
    return {
        id: id,
        name: name !== null && name !== void 0 ? name : undefined,
        bands: []
    };
};
var makeRecordLabel = function(id, name) {
    return {
        id: id,
        name: name,
        bands: []
    };
};
var addBandToFestival = function(festival, band) {
    band.festivals.push(festival);
    festival.bands.push(band);
};
var addBandToRecordLabel = function(recordLabel, band) {
    band.recordLabel = recordLabel;
    recordLabel.bands.push(band);
};
