import { z } from 'zod'

const NOTION_DATABASE = z.object({
  id: z.string(),
  frenchWord: z.string(),
  deutshWord: z.string(),
})

const NOTION_DATABASE_LIST = z.array(NOTION_DATABASE)

export type TNotionDatabase = z.infer<typeof NOTION_DATABASE>
export type TNotionDatabaseList = z.infer<typeof NOTION_DATABASE_LIST>

export { NOTION_DATABASE, NOTION_DATABASE_LIST }
