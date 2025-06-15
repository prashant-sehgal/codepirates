import React from 'react'

interface Props {
  id: string
  title: string
  state?: 'show' | 'collapse'
  children: React.ReactNode
}

export default function ExpandBox({
  children,
  id,
  title,
  state = 'collapse',
}: Readonly<Props>) {
  return (
    <div
      className="accordion project-accordion"
      id="portfolio-details-projectAccordion"
    >
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button ${
              state === 'collapse' ? 'collapsed' : ''
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${id}`}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {title}
          </button>
        </h2>
        <div
          id={id}
          className={`accordion-collapse ${state}`}
          data-bs-parent="#portfolio-details-projectAccordion"
        >
          <div className="accordion-body text-white d-flex flex-column gap-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
