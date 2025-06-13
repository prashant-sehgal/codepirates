import { NextRequest, NextResponse } from 'next/server'
import mongoose from 'mongoose'
import catchAsync from './catchAsync'
import * as db from '../lib/db'
import AppError from './appError'

export function findAll(model: mongoose.Model<any>) {
  return catchAsync(async function (request: NextRequest) {
    await db.connect()
    const documents = await model.find()

    return NextResponse.json(
      {
        status: 'success',
        length: documents.length,
        data: { documents },
      },
      { status: 200 }
    )
  })
}

export function createOne(model: mongoose.Model<any>) {
  return catchAsync(async function (request: NextRequest) {
    await db.connect()
    const data = await request.json()
    const document = await model.create(data)

    return NextResponse.json(
      {
        status: 'success',
        data: { document },
      },
      { status: 201 }
    )
  })
}

export function findOne(model: mongoose.Model<any>) {
  return catchAsync(async function (
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
  ) {
    await db.connect()
    const { id } = await params
    const document = await model.findById(id)

    if (!document) throw new AppError('No document found with this ID.', 404)

    return NextResponse.json(
      {
        status: 'success',
        data: { document },
      },
      { status: 200 }
    )
  })
}

export function updateOne(model: mongoose.Model<any>) {
  return catchAsync(async function (
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
  ) {
    await db.connect()
    const { id } = await params
    const body = await request.json()

    const document = await model.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    })

    if (!document) throw new AppError('No document found with this ID.', 404)

    return NextResponse.json(
      {
        status: 'success',
        data: { document },
      },
      { status: 200 }
    )
  })
}

export function deleteOne(model: mongoose.Model<any>) {
  return catchAsync(async function (
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
  ) {
    await db.connect()
    const { id } = await params
    const document = await model.findByIdAndDelete(id)

    if (!document) throw new AppError('No document found with this ID.', 404)

    return new NextResponse(null, { status: 204 })
  })
}
