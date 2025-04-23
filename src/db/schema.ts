import { pgTable, integer as int } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";
 
export const counter = pgTable('counter', {
  id: int('id').primaryKey().generatedAlwaysAsIdentity(),
  value: int('value').notNull(),
  createdAt: int('created_at').notNull(),
});

export type Insert = InferInsertModel<typeof counter>;
export type Select = InferSelectModel<typeof counter>;