// src/server/trpc/router/index.ts
import { t } from "../trpc";
import { authRouter } from "./auth";
import { messageRouter } from "./message";
import { subscriptionRouter } from "./subscription";
import { userRouter } from "./user";

export const appRouter = t.router({
  message: messageRouter,
  auth: authRouter,
  user: userRouter,
  subscription: subscriptionRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
