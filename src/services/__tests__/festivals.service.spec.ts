import { FestivalsApi, MusicFestival } from "../../generated/openapi";
import { Logger } from "../../lib/logger";
import { FestivalsService } from "../festivals.service";

describe("FestivalService", () => {
  let service: FestivalsService;
  let festivalsApi: FestivalsApi;

  beforeEach(() => {
    jest.clearAllMocks();
    festivalsApi = new FestivalsApi();
    service = new FestivalsService(festivalsApi, {
      info: () => {}
    } as unknown as Logger);
  });

  it("getFestivalsData - should return data", async () => {
    const festivals: MusicFestival[] = [
      {
        name: "Festival 1",
        bands: [
          {
            name: "Cool band",
            recordLabel: "That label",
          },
        ],
      },

      {
        name: "Festival 2",
        bands: [
          {
            name: "Another band",
            recordLabel: "Another label",
          },
        ],
      },
    ];

    jest
      .spyOn(festivalsApi, "aPIFestivalsGet")
      .mockImplementation()
      .mockResolvedValue({
        data: festivals,
      } as any);

    const results = await service.getFestivalsData();

    expect(results.bands.length).toBe(2);
    expect(results.festivals.length).toBe(2);
    expect(results.recordLabels.length).toBe(2);

    expect(results.bands[0]?.name).toBe("Cool band");
    expect(results.bands[1]?.name).toBe("Another band");

    expect(results.festivals[0]?.name).toBe("Festival 1");
    expect(results.festivals[1]?.name).toBe("Festival 2");

    expect(results.recordLabels[0]?.name).toBe("That label");
    expect(results.recordLabels[1]?.name).toBe("Another label");
  });

  it("should return bands of the same name as one band", async () => {
    const festivals: MusicFestival[] = [
      {
        name: "Festival 1",
        bands: [
          {
            name: "Cool band",
            recordLabel: "That label",
          },
        ],
      },

      {
        name: "Festival 2",
        bands: [
          {
            name: "Cool band",
            recordLabel: "Another label",
          },
        ],
      },
    ];

    jest
      .spyOn(festivalsApi, "aPIFestivalsGet")
      .mockImplementation()
      .mockResolvedValue({
        data: festivals,
      } as any);

    const results = await service.getFestivalsData();

    expect(results.bands.length).toBe(1);
    expect(results.bands[0]?.name).toBe("Cool band");
  });

  it("should return record labels of the same name as one record label", async () => {
    const festivals: MusicFestival[] = [
      {
        name: "Festival 1",
        bands: [
          {
            name: "Cool band",
            recordLabel: "That label",
          },
        ],
      },

      {
        name: "Festival 2",
        bands: [
          {
            name: "Another band",
            recordLabel: "That label",
          },
        ],
      },
    ];

    jest
      .spyOn(festivalsApi, "aPIFestivalsGet")
      .mockImplementation()
      .mockResolvedValue({
        data: festivals,
      } as any);

    const results = await service.getFestivalsData();

    expect(results.recordLabels.length).toBe(1);
    expect(results.recordLabels[0]?.name).toBe("That label");
  });

  it("should relate bands to festivals, record labels to bands", async () => {
    const festivals: MusicFestival[] = [
      {
        name: "Festival 1",
        bands: [
          {
            name: "Cool band",
            recordLabel: "That label",
          },
        ],
      },

      {
        name: "Festival 2",
        bands: [
          {
            name: "Another band",
            recordLabel: "Another label",
          },
        ],
      },
    ];

    jest
      .spyOn(festivalsApi, "aPIFestivalsGet")
      .mockImplementation()
      .mockResolvedValue({
        data: festivals,
      } as any);

    const results = await service.getFestivalsData();

    const band = results.bands[0]!;

    expect(band.festivals.includes(results.festivals[0]!)).toBe(true);
    expect(results.festivals[0]?.bands.includes(band)).toBe(true);
    expect(results.recordLabels[0]?.bands.includes(band)).toBe(true);
    expect(band.recordLabel).toBe(results.recordLabels[0]);
  });

  it("should treat empty-named record labels as different record labels", async () => {
    const festivals: MusicFestival[] = [
      {
        name: "Festival 1",
        bands: [
          {
            name: "Cool band",
            recordLabel: "",
          },
        ],
      },

      {
        name: "Festival 2",
        bands: [
          {
            name: "Another band",
            recordLabel: "",
          },
        ],
      },
    ];

    jest
      .spyOn(festivalsApi, "aPIFestivalsGet")
      .mockImplementation()
      .mockResolvedValue({
        data: festivals,
      } as any);

    const results = await service.getFestivalsData();

    expect(results.recordLabels.length).toBe(2)
  });

  it("should treat unnamed festivals as different festivals", async () => {
    const festivals: MusicFestival[] = [
      {
        bands: [
          {
            name: "Cool band",
            recordLabel: "That label",
          },
        ],
      },

      {
        bands: [
          {
            name: "Another band",
            recordLabel: "That other label",
          },
        ],
      },
    ];

    jest
      .spyOn(festivalsApi, "aPIFestivalsGet")
      .mockImplementation()
      .mockResolvedValue({
        data: festivals,
      } as any);

    const results = await service.getFestivalsData();

    expect(results.festivals.length).toBe(2)
  });
});
