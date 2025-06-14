import mongoose from 'mongoose'

export interface TypeFilter extends mongoose.Document {
  id: string
  title: string
  filter: string
  icon: string
}

const filterSchema = new mongoose.Schema<TypeFilter>(
  {
    title: {
      type: String,
      required: [true, 'Filter must have a title.'],
    },
    filter: {
      type: String,
      required: [true, 'Filter must have a filter body.'],
    },
    icon: {
      type: String,
      required: [true, 'Filter must have an icon.'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

const Filter = mongoose.models.Filter || mongoose.model('Filter', filterSchema)
export default Filter
