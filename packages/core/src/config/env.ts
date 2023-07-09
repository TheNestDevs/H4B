import { z } from "zod";

export const envSchema = z.object({
    NODE_ENV: z.string(),
    PORT: z.string(),
    HASURA_GRAPHQL_ENDPOINT: z.string(),
    HASURA_GRAPHQL_ADMIN_SECRET: z.string(),
})

export type Env = z.infer<typeof envSchema>

export const env = envSchema.parse(process.env)

declare global {
    namespace NodeJS {
        interface ProcessEnv extends Env {}
    }
}

console.log('\n🚀 Environment Variables Initialized');