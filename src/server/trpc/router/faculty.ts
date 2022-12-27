import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const facultyRouter = router({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const faculty = await ctx.prisma.faculty.findMany({
      include: {
        Rate: {
          select: {
            RateValue: true,
          },
        },
        Department: {
          select: {
            name: true,
          },
        },
      },
    });

    return faculty.reverse();
  }),
});
