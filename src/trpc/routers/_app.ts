import { premiumProcedure, protectedProcedure, createTRPCRouter } from '../init';
import prisma from '@/lib/db';
import { inngest } from '@/inngest/client';
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import { TRPCError } from '@trpc/server';

export const appRouter = createTRPCRouter({
  testAi: premiumProcedure.mutation(async () => {
    await inngest.send({
      name: "execute/ai"
    })

    return { success: true, message: "Job queued" }
  }),

  getWorkflows: protectedProcedure.query(({ ctx }) => {
    // console.log({ userId: ctx.auth.user.id });
    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async () => {

    await inngest.send({
      name: "app/task.created",
      data: {
        email: "test@test.com",
      },
    })

    return { success: true, message: "Job queued" }
  })
});

// export type definition of API
export type AppRouter = typeof appRouter;