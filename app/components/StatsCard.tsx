import React from 'react'

export default function StatsCard() {
  return (
    <div className="stats-card">
      <div className="stats-number">
        <h2>{formatNumber(1000)}+</h2>
      </div>
      <div className="stats-label">
        <p>
          <i className="bi bi-youtube m-2"></i>Youtube Videos
        </p>
      </div>
    </div>
  )
}

function formatNumber(num: number): string {
  if (num < 1000) return num.toString()
  if (num < 1_000_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K'
  if (num < 1_000_000_000)
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M'
  return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B'
}
