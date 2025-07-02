import fastify from 'fastify'

import { config } from 'dotenv'
import path from 'path'
import { drizzle } from 'drizzle-orm/node-postgres'
import { userProgress, users, events } from './src/db/schema'
// Load .env from the correct location
config({ path: path.resolve(__dirname, '../.env') })

const db = drizzle(process.env.DATABASE_URL!)

const server = fastify()

server.get('/', async (request, reply) => {
	return { hello: 'world!' }
})

server.post('/arise', async (req, res) => {
	const userId = '2f5363b9-8fc3-482a-da6b-2d605fb782f1'
	try {
		const payload = {
			userId: userId,
			changelog: {
				event: 'New Character',
				at: new Date().toISOString()
			}
		}
		const eventLog = {
			userId: userId,
			eventType: 'New Character',
			metadata: {
				origin: '/arise endpoint'
			}
		}
		await db.transaction(async (tx) => {
			await tx.insert(events).values(eventLog)
			await tx.insert(userProgress).values(payload)
		})

		console.log('Arisen')
	} catch (e) {
		console.log(e)
	}
})

server.post('/awaken', async (req, res) => {
	const userId = '2f5363b9-8fc3-482a-da6b-2d605fb782f1'
	try {
		const now = new Date()
		// GET currentUserProgress
		// IF user is dead from neglect, goto resurrect()
		// ELSE set currentUserProgress to full hp and stamina based on level
		// THEN write to changelog and events that user awakened
		const currentUserProgress = {
			changelog: [
				{
					event: 'awakened',
					at: now.toISOString
				}
			],
			current_hp: 3,
			current_stamina: 5,
			current_level: 1,
			current_xp: 0,
			user_id: userId
		}

		// const response = await db.insert(userProgress).values(currentUserProgress)
	} catch (e) {
		console.log('Could not awaken user')
	}
})

// /users route to get all users from the db
server.get('/users', async (request, reply) => {
	try {
		const usersList = await db.select().from(users)
		return usersList
	} catch (error) {
		console.error('DB error:', error)
		reply.status(500).send({ error: 'Failed to fetch users' })
	}
})

server.listen({ port: 8080, host: '0.0.0.0' }, (err, address) => {
	if (err) {
		console.error(err)
		process.exit(1)
	}
	console.log(`Server listening at ${address}`)
})
