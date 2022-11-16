import { Logger } from "../lib/logger";
import { FestivalDataFormatter } from "./festivals-formatter";
import { FestivalsService } from "./festivals.service";

export class PrinterService {
  constructor(
    private festivalsService: FestivalsService,
    private logger: Logger
  ) {}
  
  print = () => {
    this.logger.info('printing festival data')

    this.festivalsService.getFestivalsData()
      .then((data) => FestivalDataFormatter.formatFestivalData(data.recordLabels, data.bands))
      .then(console.log)
      .catch((err) => {
        this.logger.error({ msg: "Unknown error", err });
        process.exit(1);
      })
  }
}
