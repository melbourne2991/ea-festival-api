import { Logger } from "../lib/logger";
import { FestivalsDataFormatter } from "./festivals-data-formatter";
import { FestivalsService } from "./festivals.service";

export class PrinterService {
  constructor(
    private festivalsService: FestivalsService,
    private logger: Logger
  ) {}
  
  print = () => {
    this.logger.info('printing festival data')

    this.festivalsService.getFestivalsData()
      .then((data) => FestivalsDataFormatter.formatFestivalData(data.recordLabels, data.bands))
      .then(console.log)
      .catch((err) => {
        this.logger.error({ msg: "Unknown error", err });
        process.exit(1);
      })
  }
}
