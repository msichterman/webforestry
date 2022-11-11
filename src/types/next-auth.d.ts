import { DefaultSession } from "next-auth";
import { string } from "zod";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
      role: string;
      orgId?: number;
    } & DefaultSession["user"];
  }
}
