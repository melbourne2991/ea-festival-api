import {axiosInstance} from "./axios"
import MockAdapter from "axios-mock-adapter"
import { config } from "../config"

const mock = new MockAdapter(axiosInstance)

const scenarios = {
  basic: () => {
    mock.onGet(`${config.apiBaseUrl}/api/v1/festivals`).reply(200, [
      {
        name: "Festival e2e 1",
        bands: [
          {
            name: "Cool band",
            recordLabel: "That label",
          },
        ],
      },

      {
        name: "Festival e2e 2",
        bands: [
          {
            name: "Another band",
            recordLabel: "Another label",
          },
        ],
      },
    ], { 'Content-Type': 'application/json' })
  },

  'rate-limited': () => {
    mock
      .onGet(`${config.apiBaseUrl}/api/v1/festivals`)
      .replyOnce(429, 'Rate limited')
      .onGet(`${config.apiBaseUrl}/api/v1/festivals`)
      .replyOnce(429, 'Rate limited')
      .onGet(`${config.apiBaseUrl}/api/v1/festivals`)
      .replyOnce(200, [
        {
          name: "Festival e2e 1",
          bands: [
            {
              name: "Cool band",
              recordLabel: "That label",
            },
          ],
        },
  
        {
          name: "Festival e2e 2",
          bands: [
            {
              name: "Another band",
              recordLabel: "Another label",
            },
          ],
        },
      ])
  }
};

scenarios[config.testScenario! as keyof typeof scenarios]()

export { axiosInstance }