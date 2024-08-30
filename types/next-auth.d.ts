import { DefaultSession } from "next-auth"

//typescript declaration type
declare module "next-auth" {
    interface Session {
        user: User & DefaultSession["user"];
    }
    interface User {
        role: string | null
    }
}