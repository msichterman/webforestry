// src/server/trpc/router/index.ts
import { t } from "../trpc";
import { messageRouter } from "./message";

export const appRouter = t.router({
  message: messageRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
