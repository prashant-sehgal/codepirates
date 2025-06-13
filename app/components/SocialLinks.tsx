import Link from 'next/link'
import React from 'react'

export default function SocialLinks() {
  return (
    <div className="social-links d-flex mt-4">
      <Link href="https://x.com/prashantsehgal_" target="_blank">
        <i className="bi bi-twitter-x" />
      </Link>
      {/* <a href="">
        <i className="bi bi-facebook" />
      </a>
      <a href="">
        <i className="bi bi-instagram" />
      </a> */}
      <Link href="https://www.linkedin.com/in/prashantsehgal~" target="_blank">
        <i className="bi bi-linkedin" />
      </Link>
    </div>
  )
}
