import { FestivalDataFormatter } from "../festivals-formatter";
import { addBandToFestival, addBandToRecordLabel, makeBand, makeFestival, makeRecordLabel } from "./helpers";


describe('FestivalDataFormatter', () => {
  it('should format record labels as expected', () => {
    const bandA = makeBand('ba', 'Band Awesome')
    const bandB = makeBand('bb', 'Cool Awesome Band')

    const recordLabelA = makeRecordLabel('ra', 'That label')
    const recordLabelB = makeRecordLabel('rb', 'Another label')

    const festivalA = makeFestival('fa', 'Festivals R Amazing')
    const festivalB = makeFestival('fb', 'I heart festivals')

    addBandToFestival(festivalA, bandA)
    addBandToFestival(festivalB, bandB)
    addBandToRecordLabel(recordLabelA, bandA)
    addBandToRecordLabel(recordLabelB, bandB)

    const result = FestivalDataFormatter.formatFestivalData([
      recordLabelA,
      recordLabelB
    ], [
      bandA,
      bandB
    ])

    expect(result).toMatchSnapshot()
  });

  it('should give bands with empty names but different ids, different placeholder names', () => {
    const bandA = makeBand('ba', '')
    const bandB = makeBand('bb', '')

    const recordLabelA = makeRecordLabel('ra', 'That label')
    const recordLabelB = makeRecordLabel('rb', 'Another label')

    const festivalA = makeFestival('fa', 'Festivals R Amazing')
    const festivalB = makeFestival('fb', 'I heart festivals')

    addBandToFestival(festivalA, bandA)
    addBandToFestival(festivalB, bandA)
    addBandToFestival(festivalB, bandB)
    addBandToRecordLabel(recordLabelA, bandB)
    addBandToRecordLabel(recordLabelB, bandA)

    const result = FestivalDataFormatter.formatFestivalData([
      recordLabelA,
      recordLabelB
    ], [
      bandA,
      bandB
    ])

    expect(result).toMatchSnapshot()
  })

  it('should give festivals with no names, but different ids, different placeholder names', () => {
    const bandA = makeBand('ba', 'Band Awesome')
    const bandB = makeBand('bb', 'Cool Awesome Band')

    const recordLabelA = makeRecordLabel('ra', 'That label')
    const recordLabelB = makeRecordLabel('rb', 'Another label')

    const festivalA = makeFestival('fa', 'Festivals R Amazing')
    const festivalB = makeFestival('fb', 'I heart festivals')
    const festivalC = makeFestival('fc')
    const festivalD = makeFestival('fd', '')

    addBandToFestival(festivalA, bandA)
    addBandToFestival(festivalB, bandB)
    addBandToFestival(festivalC, bandA)
    addBandToFestival(festivalD, bandA)
    addBandToFestival(festivalD, bandB)
    addBandToRecordLabel(recordLabelA, bandA)
    addBandToRecordLabel(recordLabelB, bandB)

    const result = FestivalDataFormatter.formatFestivalData([
      recordLabelA,
      recordLabelB
    ], [
      bandA,
      bandB
    ])

    expect(result).toMatchSnapshot()
  })

  it('should put bands with no record label under a special category', () => {
    const bandA = makeBand('ba', 'Band Awesome')
    const bandB = makeBand('bb', 'Cool Awesome Band')

    const festivalA = makeFestival('fa', 'Festivals R Amazing')
    const festivalB = makeFestival('fb', 'I heart festivals')

    const recordLabelA = makeRecordLabel('ra', 'That label')
    const recordLabelB = makeRecordLabel('rb', 'Another label')

    addBandToFestival(festivalA, bandA)
    addBandToFestival(festivalB, bandB)

    const result = FestivalDataFormatter.formatFestivalData([
      recordLabelA,
      recordLabelB
    ], [
      bandA,
      bandB
    ])

    // match exactly 1 - there should not be multiple "No label" categories.
    expect(result.match(/\[No label\]/g)?.length).toBe(1)
  });

  it('should show "No data to display." when there is no data', () => {
    const result = FestivalDataFormatter.formatFestivalData([], [])
    expect(result).toEqual('No data to display.\n')
  });
})