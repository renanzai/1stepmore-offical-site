import { z } from 'zod';
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { TRPCError } from "@trpc/server";
import { createContactSubmission } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, 'Name is required'),
          company: z.string().min(1, 'Company is required'),
          email: z.string().email('Invalid email'),
          consultationType: z.enum([
            'content_production',
            'localization_service',
            'strategy_consulting',
            'partner_application',
            'other',
          ]),
          message: z.string().min(10, 'Message must be at least 10 characters'),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await createContactSubmission(input);

          // Send notification to owner
          await notifyOwner({
            title: '新的联系表单提交',
            content: `来自 ${input.name} (${input.company}) 的咨询\n\n邮箱: ${input.email}\n咨询类型: ${input.consultationType}\n\n消息: ${input.message}`,
          });

          return { success: true };
        } catch (error) {
          console.error('Failed to submit contact form:', error);
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Failed to submit form',
          });
        }
      }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;

export type ConsultationType = 'content_production' | 'localization_service' | 'strategy_consulting' | 'partner_application' | 'other';
