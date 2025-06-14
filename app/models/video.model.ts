import mongoose, { Mongoose } from 'mongoose'
import slugify from 'slugify'
import { TypeFilter } from './filter.model'

export interface TypeResource extends mongoose.Document {
  title: string
  link: string
}

export interface TypeRelatedVideo extends mongoose.Document {
  title: string
  link: string
  thumbnailUrl: string
}

export interface TypeVideo extends mongoose.Document {
  id: string
  filter: TypeFilter
  title: string
  description: string
  keywords: [string]
  keyPoints: [string]
  videoUrl: string
  creatorProfileUrl: string
  slug: string
  resources: TypeResource[]
  relatedVideos: TypeRelatedVideo[]
  createdAt: Date
  updatedAt: Date
}

const ResourceSchema = new mongoose.Schema<TypeResource>({
  title: {
    type: String,
    required: [true, 'Resource must have a title.'],
  },
  link: {
    type: String,
    required: [true, 'Resource must have a link.'],
  },
})

const RelatedVideoSchema = new mongoose.Schema<TypeRelatedVideo>({
  title: {
    type: String,
    required: [true, 'RelatedVideo must have a title.'],
  },
  link: {
    type: String,
    required: [true, 'RelatedVideo must have a link.'],
  },
  thumbnailUrl: {
    type: String,
    required: [true, 'RelatedVideo must have a thumnailUrl.'],
  },
})

const videoSchema = new mongoose.Schema<TypeVideo>(
  {
    filter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Filter',
      index: true,
      required: [true, 'Video must have a filter.'],
    },
    title: {
      type: String,
      trim: true,
      unique: true,
      index: true,
      required: [true, 'Video must have a title.'],
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'Video must have a description.'],
    },
    keywords: {
      type: [String],
      required: true,
      validate: {
        validator: function (keywords: string[]) {
          return keywords.length > 0
        },
        message: 'Video must have at least one keyword.',
      },
    },
    keyPoints: {
      type: [String],
      required: true,
      validate: {
        validator: function (keyPoints: string[]) {
          return keyPoints.length > 0
        },
        message: 'Video must have at least one keyPoint.',
      },
    },
    videoUrl: {
      type: String,
      required: [true, 'Video must have a videoUrl.'],
    },
    creatorProfileUrl: {
      type: String,
      required: [true, 'Video must have a creatorProfileUrl.'],
    },
    resources: {
      type: [ResourceSchema],
      required: true,
      validate: {
        validator: function (resources: TypeResource[]) {
          return resources.length > 0
        },
        message: 'Video must have at least one resource',
      },
    },
    relatedVideos: {
      type: [RelatedVideoSchema],
      required: true,
      validate: {
        validator: function (relatedVideos: TypeRelatedVideo[]) {
          return relatedVideos.length > 0
        },
        message: 'Video must have at least one relatedVideo',
      },
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

videoSchema.pre(/^find/, function (this: TypeVideo, next) {
  this.populate({ path: 'filter' })
  next()
})

videoSchema.pre('save', function (this: TypeVideo, next) {
  if (!this.isNew && !this.isModified('title')) return next()

  this.slug = slugify(this.title, {
    lower: true, // convert to lowercase
    strict: true, // remove special characters except dashes
    remove: /[^a-zA-Z0-9 -]/g, // remove everything except alphanumerics, space, and dash
  })

  next()
})

const Video = mongoose.models.Video || mongoose.model('Video', videoSchema)
export default Video
