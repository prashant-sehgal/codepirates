import React from 'react'
import Markdown from 'react-markdown'
import * as db from '@/app/lib/db'
import Video from '@/app/models/video.model'
import { notFound } from 'next/navigation'
import Container from './Container'
import MediaSection from './MediaSection'
import VideoFrame from './VideoFrame'
import Keywords from './Keywords'
import Filter from '@/app/models/filter.model'
import Details from './Details'
import ExpandBox from './ExpandBox'
import KeyPoints from './KeyPoints'
import Title from './Title'
import Meta from './Meta'
import Creator from './Creator'
import Resource from './Resource'
import VideoLink from './VideoLink'
import ShowMore from '@/app/components/ShowMore/ShowMore'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function page(props: Readonly<Props>) {
  const { slug } = await props.params
  await db.connect()

  const video = await Video.findOne({ slug })
  const filter = await Filter.findOne({ filter: video?.filter })

  if (!video || !filter) return notFound()

  return (
    <Container>
      <MediaSection>
        <VideoFrame videoUrl={video.videoUrl} />
        <Keywords keywords={video.keywords} />
        <ShowMore>
          <Markdown>{video.description}</Markdown>
        </ShowMore>
      </MediaSection>
      <Details>
        <Meta filter={filter.title} />
        <Title>{video.title}</Title>
        <Creator creatorProfileUrl={video.creatorProfileUrl} />
        <ExpandBox title="More Videos Like This" id="videos">
          {video.relatedVideos.map((video) => (
            <VideoLink video={video} key={video.id} />
          ))}
        </ExpandBox>
        <ExpandBox title="Docs & Resources" id="resources">
          {video.resources.map((resource) => (
            <Resource key={resource.id} resource={resource} />
          ))}
        </ExpandBox>

        <KeyPoints keyPoints={video.keyPoints} />
      </Details>
    </Container>
  )
}
