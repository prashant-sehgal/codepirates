import mongoose from 'mongoose'

export interface TypeMessage extends mongoose.Document {
  id: string
  firstName: string
  email: string
  subject: string
  message: string
}

const messageSchema = new mongoose.Schema<TypeMessage>(
  {
    firstName: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, 'Message must have fullName.'],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, 'Message must have an email.'],
    },
    subject: {
      type: String,
      trim: true,
      required: [true, 'Message must have subject.'],
    },
    message: {
      type: String,
      trim: true,
      required: [true, 'Message must have message body.'],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

const Message =
  mongoose.models.Message ||
  mongoose.model<TypeMessage>('Message', messageSchema)

export default Message
