import { FestivalsApi } from "../generated/openapi";
import { Logger } from "../lib/logger";
import { FestivalsDataMapper } from "./festivals-data-mapper";

export class FestivalsService {
  constructor(private api: FestivalsApi, private logger: Logger) {
  }

  async getFestivalsData() {
    this.logger.info('retrieving festival data');

    const response = await this.api.aPIFestivalsGet();

    this.logger.info('got festival data');

    /**
     * Although the swagger contract asserts a 200 should always return an array
     * in practice sometimes the API returns an empty response.
     *
     * In a real world scenario I would talk to the API
     * team because the contract is broken.
     *
     * However, in this case data we make the argument to mapFestivalData optional`
     */
     const mapped = FestivalsDataMapper.mapFestivalData(response.data)

     return mapped;
  }

}
