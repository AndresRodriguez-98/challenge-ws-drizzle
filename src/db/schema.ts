import { pgTable, integer as int, timestamp } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";
 
export const counter = pgTable('counter', {
  id: int('id').primaryKey().generatedAlwaysAsIdentity(),
  value: int('value').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

export type Insert = InferInsertModel<typeof counter>;
export type Select = InferSelectModel<typeof counter>;