import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

<<<<<<< HEAD
export const users = sqliteTable('users_drizzle', {
=======
export const users2 = sqliteTable('users_drizzle', {
>>>>>>> 6d3831d (resolve user table conflict)
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    avatar: text('avatar').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
})
