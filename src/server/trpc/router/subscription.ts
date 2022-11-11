// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require("stripe")(env.STRIPE_SECRET_KEY);
import { z } from "zod";
import { t, protectedProcedure } from "../trpc";
import { env } from "@/env/server.mjs";

export const subscriptionRouter = t.router({
  initialize: protectedProcedure
    .input(
      z.object({
        id: z.string().min(2).max(120),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const orgName = ctx.session.user?.name
        ? `${ctx.session.user.name}'s Organization`
        : "My New Organization";

      // Get the Stripe checkout session information
      const session = await stripe.checkout.sessions.retrieve(input.id);
      const { subscription } = session;

      return await ctx.prisma.organization.create({
        data: {
          name: orgName,
          subscription: {
            create: {
              stripeSubscriptionId: subscription,
              checkoutSessions: {
                create: {
                  stripeCheckoutSessionId: input.id,
                },
              },
            },
          },
          membership: {
            create: {
              role: "OWNER",
              userId: ctx.session.user.id,
            },
          },
        },
      });
    }),
});
