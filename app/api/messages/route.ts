import Message from '@/app/models/message.model'
import { createOne, findAll } from '@/app/utils/restHandlers'

export const GET = findAll(Message)
export const POST = createOne(Message)
