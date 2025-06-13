import Message from '@/app/models/message.model'
import { deleteOne, findOne, updateOne } from '@/app/utils/restHandlers'

export const GET = findOne(Message)
export const PATCH = updateOne(Message)
export const DELETE = deleteOne(Message)
