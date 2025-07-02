import { pgTable, uuid, text, timestamp, integer, jsonb } from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

export const users = pgTable('users', {
	id: uuid('id').defaultRandom().primaryKey(),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
	email: text('email').notNull().unique()
}).enableRLS()

export const xpLevels = pgTable('xp_levels', {
	level: integer('level').notNull().unique(),
	xpRequired: integer('xp_required').notNull()
}).enableRLS()

export const userProgress = pgTable('user_progress', {
	id: uuid('id').defaultRandom().primaryKey(),
	userId: uuid('user_id')
		.notNull()
		.references(() => users.id, { onDelete: 'cascade' }),
	currentHp: integer('current_hp').notNull().default(3),
	currentStamina: integer('current_stamina').notNull().default(5),
	currentXp: integer('current_xp').notNull().default(0),
	currentLevel: integer('current_level').notNull().default(1),
	changelog: jsonb('changelog')
		.notNull()
		.default(sql`'[]'::jsonb`),
	updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow()
}).enableRLS()

export const events = pgTable('events', {
	id: uuid('id').defaultRandom().primaryKey(),
	userId: uuid('user_id')
		.notNull()
		.references(() => users.id, { onDelete: 'cascade' }),
	eventType: text('event_type').notNull(),
	metadata: jsonb('metadata'),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow()
}).enableRLS()
