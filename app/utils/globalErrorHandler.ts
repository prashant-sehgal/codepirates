import { NextResponse } from 'next/server'

export default function globalErrorHandler(err: any) {
  const status = err.status || 'error'
  const statusCode = err.statusCode || 500

  return NextResponse.json(
    {
      status,
      error: { message: err.message },
    },
    { status: statusCode }
  )
}
