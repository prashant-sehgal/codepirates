import { NextRequest, NextResponse } from 'next/server'
import globalErrorHandler from './globalErrorHandler'

export default function catchAsync(
  handler: (request: NextRequest, ...args: any[]) => Promise<NextResponse>
) {
  return async function (
    request: NextRequest,
    ...args: any[]
  ): Promise<NextResponse> {
    try {
      return await handler(request, ...args)
    } catch (err: any) {
      return globalErrorHandler(err)
    }
  }
}
