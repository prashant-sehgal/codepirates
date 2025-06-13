import Link from 'next/link'
import React from 'react'

export default function Copyright() {
  return (
    <div className="container copyright text-center mt-4">
      <p>
        © <span>Copyright</span>{' '}
        <strong className="px-1 sitename">Code Pirates</strong>{' '}
        <span>All Rights Reserved</span>
      </p>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you've purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
        Powered by{' '}
        <Link href="https://youtube.com/" target="_blank">
          YouTube
        </Link>
      </div>
    </div>
  )
}
