import React from 'react'

interface Props {
  keyPoints: string[]
}

export default function KeyPoints(props: Readonly<Props>) {
  const { keyPoints } = props
  const pointsPerColumn = 3

  // Function to chunk the array into smaller arrays (columns)
  const chunkArray = (arr: string[], chunkSize: number) => {
    const result = []
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize))
    }
    return result
  }

  const columns = chunkArray(keyPoints, pointsPerColumn)

  return (
    <div className="project-features" data-aos="fade-up" data-aos-delay={300}>
      <h3>
        <i className="bi bi-stars" /> Key Features
      </h3>
      <div className="row g-3">
        {columns.map((columnPoints, colIndex) => (
          <div className="col-md-6" key={`col-${colIndex}`}>
            {' '}
            {/* Using col-md-6 for two-column layout */}
            <ul className="feature-list">
              {columnPoints.map((point, pointIndex) => (
                <li key={`col-${colIndex}-point-${pointIndex}`}>
                  <i className="bi bi-check2-circle" /> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
