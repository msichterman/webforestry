// src/server/trpc/router/index.ts
import { t } from "../trpc";
import { authRouter } from "./auth";
import { messageRouter } from "./message";

export const appRouter = t.router({
  message: messageRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
