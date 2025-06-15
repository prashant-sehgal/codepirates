import mongoose from 'mongoose'

export interface TypeFilter extends mongoose.Document {
  id: string
  title: string
  filter: string
  icon: string
  createdAt: Date
  updatedAt: Date
}

const filterSchema = new mongoose.Schema<TypeFilter>(
  {
    title: {
      type: String,
      required: [true, 'Filter must have a title.'],
      unique: true,
    },
    filter: {
      type: String,
      required: [true, 'Filter must have a filter body.'],
      unique: true,
    },
    icon: {
      type: String,
      required: [true, 'Filter must have an icon.'],
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

const Filter =
  (mongoose.models.Filter as mongoose.Model<TypeFilter>) ||
  mongoose.model<TypeFilter>('Filter', filterSchema)
export default Filter
