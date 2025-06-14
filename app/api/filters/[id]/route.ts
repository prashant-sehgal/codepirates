import Filter from '@/app/models/filter.model'
import { deleteOne, findOne, updateOne } from '@/app/utils/restHandlers'

export const GET = findOne(Filter)
export const PATCH = updateOne(Filter)
export const DELETE = deleteOne(Filter)
