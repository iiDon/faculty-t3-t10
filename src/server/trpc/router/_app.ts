import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { facultyRouter } from "./faculty";
import { rateRouter } from "./rate";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  rates: rateRouter,
  faculty: facultyRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
