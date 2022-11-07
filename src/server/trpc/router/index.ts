// src/server/trpc/router/index.ts
import { t } from "../trpc";
import { authRouter } from "./auth";
import { messageRouter } from "./message";
import { userRouter } from "./user";

export const appRouter = t.router({
  message: messageRouter,
  auth: authRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
