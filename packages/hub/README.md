# @microtravel/aggregator-sdk

SDK + Nest module for Microtravel Aggregator API with **rate limiting**, **exponential backoff retries**, and **strict OpenAPI types (optional)**.

## Install

```bash
npm i @microtravel/aggregator-sdk axios
```

## Generate strict types (optional)
1. Put your OpenAPI JSON at `openapi/microtravel.openapi.json`
2. Run `npm run gen:types`

Then import:
```ts
import type { components } from '@microtravel/aggregator-sdk';
type TokenResponse = components['schemas']['TokenResponse_842889e6-c483-4ac3-a986-1badcc7eda43'];
```

## Usage (vanilla)

```ts
import { MicrotravelClient } from '@microtravel/aggregator-sdk';

const client = new MicrotravelClient({
  baseURL: 'https://your-api.example',
  rateLimit: { maxRPS: 10, maxConcurrent: 4 },
  retry: { retries: 4, minDelayMs: 300, backoffFactor: 2, jitter: true },
});

// Login
const auth = await client.auth.token({ apiKey: 'KEY', apiSecret: 'SECRET' });
client.setTokensFromAuth(auth);

// Call something
const res = await client.flight.search({ /* SearchFlightRequest */ });
```

## NestJS with auto-login

```ts
import { Module } from '@nestjs/common';
import { MicrotravelModule } from '@microtravel/aggregator-sdk/nest';

@Module({
  imports: [
    MicrotravelModule.register({
      baseURL: 'https://your-api.example',
      apiKey: process.env.MT_API_KEY!,
      apiSecret: process.env.MT_API_SECRET!,
      rateLimit: { maxRPS: 8, maxConcurrent: 3 },
      retry: { retries: 5, minDelayMs: 250, backoffFactor: 2, jitter: true },
    }),
  ],
})
export class AppModule {}
```

Inject `MicrotravelService` and call methods like `searchFlight`, `bookHotel`, etc.
