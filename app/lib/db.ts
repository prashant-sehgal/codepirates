// lib/dbConnect.ts
import mongoose, { Mongoose } from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string
if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

interface MongooseCache {
  conn: Mongoose | null
  promise: Promise<Mongoose> | null
}

// Extend the global scope so TypeScript knows about our cache
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export async function connect(): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = { bufferCommands: false }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((connection) => {
      return connection
    })
  }

  cached.conn = await cached.promise
  return cached.conn
}
