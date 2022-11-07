import { t, protectedProcedure } from "../trpc";

export const userRouter = t.router({
  me: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
    });
  }),
});
