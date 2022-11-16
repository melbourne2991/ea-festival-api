import { FestivalsApi, MusicFestival } from "../../generated/openapi";
import { Logger } from "../../lib/logger";
import { FestivalsService } from "../festivals.service";
import { PrinterService } from "../printer.service";

describe("Integration (Festival)", () => {
  let printerService: PrinterService;
  let festivalsApi: FestivalsApi;

  beforeEach(() => {
    jest.clearAllMocks();
    festivalsApi = new FestivalsApi();

    const logger = {
      info: () => {},
    } as unknown as Logger;

    const festivalsService = new FestivalsService(festivalsApi, logger);
    printerService = new PrinterService(festivalsService, logger);
  });

  it("should print out festival data", async () => {
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

    jest.spyOn(console, 'log')

    printerService.print();

    await new Promise(process.nextTick);

    expect((console.log as jest.Mock).mock.calls[0][0]).toMatchSnapshot()
  });
});
