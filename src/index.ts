// import { axiosInstance } from "./lib/axios";
import { config } from "./config";
import { FestivalsApi } from "./generated/openapi";
import { FestivalsService } from "./services/festivals.service";
import { logger } from "./lib/logger";
import { PrinterService } from "./services/printer.service";

const isTest = Boolean(config.testScenario);

/**
 * Conditionally import axios instance based on whether this is a test
 * In the case of tests we mock the api responses.
 */
import(isTest ? "./lib/axios-mock" :  "./lib/axios")
  .then(({ axiosInstance }) => {
    return axiosInstance;
  })
  .then((axiosInstance) => {
    const festivalsApi = new FestivalsApi(
      undefined,
      config.apiBaseUrl,
      axiosInstance
    );
    const festivalsService = new FestivalsService(festivalsApi, logger);
    const printerService = new PrinterService(festivalsService, logger);

    printerService.print();
  });
