import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const rateRouter = router({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const rates = await ctx.prisma.rate.findMany();
    return rates.reverse();
  }),
  getOne: publicProcedure
    .input(z.object({ facultyId: z.string() }))
    .query(async ({ ctx, input }) => {
      const rate = await ctx.prisma.rate.findMany({
        where: {
          Faculty: {
            id: input.facultyId,
          },
        },
      });

      return rate.reverse();
    }),
  create: publicProcedure
    .input(
      z.object({
        facultyId: z.string(),
        rates: z.array(
          z.object({
            value: z.number().max(5).min(0),
            cateId: z.string(),
          })
        ),
        comment: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { facultyId, rates, comment } = input;

      if (!ctx.session?.user) {
        throw new Error("Not authenticated");
      }

      if (!rates.length) {
        throw new Error("No rate");
      }

      if (!comment) {
        throw new Error("No comment");
      }

      const faculty_id = await ctx.prisma.faculty.findUnique({
        where: {
          id: facultyId,
        },
      });

      if (!faculty_id) {
        throw new Error("Faculty not found");
      }

      const rateCategories = await ctx.prisma.rateCategory.findMany({
        where: {
          id: {
            in: rates.map((rate) => rate.cateId),
          },
        },
      });

      if (rateCategories.length !== rates.length) {
        throw new Error("Rate category not found");
      }

      const rate = await ctx.prisma.rate.create({
        data: {
          RateValue: {
            create: rates.map((rate) => ({
              value: rate.value,
              RateCategory: {
                connect: {
                  id: rate.cateId,
                },
              },
            })),
          },
          userCreated: {
            connect: {
              id: ctx.session.user.id,
            },
          },
          Faculty: {
            connect: {
              id: facultyId,
            },
          },

          Comment: {
            create: {
              text: comment,
            },
          },
        },
      });

      return rate;
    }),
});
