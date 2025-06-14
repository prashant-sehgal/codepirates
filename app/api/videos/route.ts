import Video from '@/app/models/video.model'
import { createOne, findAll } from '@/app/utils/restHandlers'

export const GET = findAll(Video)
export const POST = createOne(Video)
