import Video from '@/app/models/video.model'
import { deleteOne, findOne, updateOne } from '@/app/utils/restHandlers'

export const GET = findOne(Video)
export const PATCH = updateOne(Video)
export const DELETE = deleteOne(Video)
