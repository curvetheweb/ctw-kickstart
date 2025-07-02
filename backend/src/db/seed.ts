import { config } from 'dotenv'
import path from 'path'
import { users, xpLevels } from './schema'
import { xpLevelsSeed } from './seed-data'

config({ path: path.resolve(__dirname, '../../../.env') })
import { drizzle } from 'drizzle-orm/node-postgres'
import { seed } from 'drizzle-seed'

async function seedXPLevels() {
	const db = drizzle(process.env.DATABASE_URL!)

	// console.log({ db })
	await db.insert(xpLevels).values(xpLevelsSeed).onConflictDoNothing()
	console.log('Seeded XP levels.')

	await seed(db, { users })
	console.log('Seeded fake users')
}

seedXPLevels()
