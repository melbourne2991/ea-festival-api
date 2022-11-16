"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _festivalsDataFormatter = require("../festivals-data-formatter");
var _helpers = require("./helpers");
describe("FestivalDataFormatter", function() {
    it("should format record labels as expected", function() {
        var bandA = (0, _helpers.makeBand)("ba", "Band Awesome");
        var bandB = (0, _helpers.makeBand)("bb", "Cool Awesome Band");
        var recordLabelA = (0, _helpers.makeRecordLabel)("ra", "That label");
        var recordLabelB = (0, _helpers.makeRecordLabel)("rb", "Another label");
        var festivalA = (0, _helpers.makeFestival)("fa", "Festivals R Amazing");
        var festivalB = (0, _helpers.makeFestival)("fb", "I heart festivals");
        (0, _helpers.addBandToFestival)(festivalA, bandA);
        (0, _helpers.addBandToFestival)(festivalB, bandB);
        (0, _helpers.addBandToRecordLabel)(recordLabelA, bandA);
        (0, _helpers.addBandToRecordLabel)(recordLabelB, bandB);
        var result = _festivalsDataFormatter.FestivalsDataFormatter.formatFestivalData([
            recordLabelA,
            recordLabelB
        ], [
            bandA,
            bandB
        ]);
        expect(result).toMatchSnapshot();
    });
    it("should give bands with empty names but different ids, different placeholder names", function() {
        var bandA = (0, _helpers.makeBand)("ba", "");
        var bandB = (0, _helpers.makeBand)("bb", "");
        var recordLabelA = (0, _helpers.makeRecordLabel)("ra", "That label");
        var recordLabelB = (0, _helpers.makeRecordLabel)("rb", "Another label");
        var festivalA = (0, _helpers.makeFestival)("fa", "Festivals R Amazing");
        var festivalB = (0, _helpers.makeFestival)("fb", "I heart festivals");
        (0, _helpers.addBandToFestival)(festivalA, bandA);
        (0, _helpers.addBandToFestival)(festivalB, bandA);
        (0, _helpers.addBandToFestival)(festivalB, bandB);
        (0, _helpers.addBandToRecordLabel)(recordLabelA, bandB);
        (0, _helpers.addBandToRecordLabel)(recordLabelB, bandA);
        var result = _festivalsDataFormatter.FestivalsDataFormatter.formatFestivalData([
            recordLabelA,
            recordLabelB
        ], [
            bandA,
            bandB
        ]);
        expect(result).toMatchSnapshot();
    });
    it("should give festivals with no names, but different ids, different placeholder names", function() {
        var bandA = (0, _helpers.makeBand)("ba", "Band Awesome");
        var bandB = (0, _helpers.makeBand)("bb", "Cool Awesome Band");
        var recordLabelA = (0, _helpers.makeRecordLabel)("ra", "That label");
        var recordLabelB = (0, _helpers.makeRecordLabel)("rb", "Another label");
        var festivalA = (0, _helpers.makeFestival)("fa", "Festivals R Amazing");
        var festivalB = (0, _helpers.makeFestival)("fb", "I heart festivals");
        var festivalC = (0, _helpers.makeFestival)("fc");
        var festivalD = (0, _helpers.makeFestival)("fd", "");
        (0, _helpers.addBandToFestival)(festivalA, bandA);
        (0, _helpers.addBandToFestival)(festivalB, bandB);
        (0, _helpers.addBandToFestival)(festivalC, bandA);
        (0, _helpers.addBandToFestival)(festivalD, bandA);
        (0, _helpers.addBandToFestival)(festivalD, bandB);
        (0, _helpers.addBandToRecordLabel)(recordLabelA, bandA);
        (0, _helpers.addBandToRecordLabel)(recordLabelB, bandB);
        var result = _festivalsDataFormatter.FestivalsDataFormatter.formatFestivalData([
            recordLabelA,
            recordLabelB
        ], [
            bandA,
            bandB
        ]);
        expect(result).toMatchSnapshot();
    });
    it("should put bands with no record label under a special category", function() {
        var _result_match;
        var bandA = (0, _helpers.makeBand)("ba", "Band Awesome");
        var bandB = (0, _helpers.makeBand)("bb", "Cool Awesome Band");
        var festivalA = (0, _helpers.makeFestival)("fa", "Festivals R Amazing");
        var festivalB = (0, _helpers.makeFestival)("fb", "I heart festivals");
        var recordLabelA = (0, _helpers.makeRecordLabel)("ra", "That label");
        var recordLabelB = (0, _helpers.makeRecordLabel)("rb", "Another label");
        (0, _helpers.addBandToFestival)(festivalA, bandA);
        (0, _helpers.addBandToFestival)(festivalB, bandB);
        var result = _festivalsDataFormatter.FestivalsDataFormatter.formatFestivalData([
            recordLabelA,
            recordLabelB
        ], [
            bandA,
            bandB
        ]);
        // match exactly 1 - there should not be multiple "No label" categories.
        expect((_result_match = result.match(/\[No label\]/g)) === null || _result_match === void 0 ? void 0 : _result_match.length).toBe(1);
    });
    it('should show "No data to display." when there is no data', function() {
        var result = _festivalsDataFormatter.FestivalsDataFormatter.formatFestivalData([], []);
        expect(result).toEqual("No data to display.\n");
    });
});
