import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "prod", "test", "local"]).default("dev"),
  NOTION_KEY: z.string(),
  DATABASE_ID: z.string(),
});

const envConfig = envSchema.parse(process.env);

export default envConfig;
