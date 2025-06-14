import React from 'react'

interface Props {
  keywords: string[]
}

export default function Keywords(props: Readonly<Props>) {
  return (
    <div className="tech-stack-badges" data-aos="fade-up" data-aos-delay={300}>
      {props.keywords.map((keyword) => (
        <span key={keyword}>{keyword}</span>
      ))}
    </div>
  )
}
