import { checkout, polar, portal } from "@polar-sh/better-auth";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import prisma from "@/lib/db";
import { polarClient } from "./polar";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {
      enabled: true,
      autoLogin: true,
    },
    plugins: [
        polar({
            client: polarClient,
            createCustomerOnSignUp: true,
            use: [
                checkout({
                    products: [
                        {
                            productId: "88cde459-4497-42e2-aac5-9657969f1b99",
                            slug: "pro"
                        }
                    ],
                    successUrl : process.env.POLAR_SUCCESS_URL,
                    authenticatedUsersOnly: true,
                }),
                portal()
            ],
        }),
    ]
});