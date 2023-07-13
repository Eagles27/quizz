import { z } from "zod";

const ListNotion = z.object({
  french: z.string(),
  english: z.string(),
});

export type TListNotion = z.infer<typeof ListNotion>;

const ListNotionArray = z.array(ListNotion);

export type TListNotionArray = z.infer<typeof ListNotionArray>;

export { ListNotion, ListNotionArray };
