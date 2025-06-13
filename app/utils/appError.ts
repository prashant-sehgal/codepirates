export default class AppError extends Error {
  public status: 'fail' | 'error'

  constructor(public message: string, public statusCode: number) {
    super(message)
    this.status = statusCode.toString().startsWith('4') ? 'fail' : 'error'
  }
}
