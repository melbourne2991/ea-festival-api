# Energy Australia Coding Test

## Usage
Ensure you have node >= v18.12.1 installed on your system and yarn.

1. Install all dependencies
```
yarn
```

2. Configure environment variables
```
cp .env.template .env
```

To run (dev)
```
yarn start
```

To build (runs tests and compiled code)
```
yarn build
```

## SDK Generation
The SDK is generated from the swagger.json file at the root of the repo, to generate run:

```
yarn sdk:generate
```

## Architecture

```

     ┌────────────────┐
     │ REST API       │
     └───────▲────────┘
             │
─────────────┼──────────────
             │
     ┌───────┴────────┐
     │OpenAPI SDK     │
     └───────▲────────┘
             │
     ┌───────┴────────┐
     │FestivalsService│
     └───────▲────────┘
             │
     ┌───────┴────────┐
     │PrinterService  │
     └────────────────┘

```

## Axios Alpha Usage
We are using an axios version of alpha due to a bug in the latest official release
The issue is documented here: https://github.com/axios/axios/issues/5089

Currently the only solution is to go back or go forward N versions.

## Comments
In a real world scenario I would have had a conversation with the API team about problems in their API.
For the sake of the test I made some best guess assumptions instead

- The contract is broken - A 200 can return an empty response, this is not documented in the swagger doc.
- Returning of empty strings is not great, I would have at minimum asked to confirm what an empty string means
  eg: Are two festivals with empty string names the same festival or different festivals, what about record labels
- Name is optional for bands accoridng to the doc, however in practice it looks as though it is always present. If it is always present
  we can reduce complexity in that we would not need to handle name not being present.

## Assumptions

- An empty 200 should be treated as no data, not an error
- Multiple festivals with empty names should be considered different festivals
- Multiple empty name record-labels should be considered different record labels
- All HTTP error codes except for 429 are fatal.