import Filter from '@/app/models/filter.model'
import { createOne, findAll } from '@/app/utils/restHandlers'

export const GET = findAll(Filter)
export const POST = createOne(Filter)
