// components/TopSliderLoader.tsx
'use client' // This directive must be at the very top of the file

import { usePathname, useSearchParams } from 'next/navigation' // No need for useRouter here unless you plan programmatic navigation
import { useEffect } from 'react'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css' // Don't forget to import the CSS for nprogress

// Configure NProgress (optional, but good for customization)
// Ensure these configurations are correct based on NProgress's API
NProgress.configure({ showSpinner: false, easing: 'ease', speed: 500 })

const TopSliderLoader = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Start NProgress on any URL change
    NProgress.start()

    // The logic here is that NProgress.done() will be called when the component
    // effectively "re-renders" for the new page, indicating navigation completion.
    // For a smooth experience, a small timeout can be added.
    const handleComplete = () => {
      NProgress.done()
    }

    // Use a timeout to ensure NProgress has a moment to show before completing
    // This often makes the loading bar more noticeable for fast navigations.
    const timer = setTimeout(() => {
      handleComplete()
    }, 100) // Adjust delay as needed (e.g., 50ms to 200ms)

    // Cleanup function: This will run when the component unmounts or before
    // the effect re-runs (if pathname or searchParams change again).
    return () => {
      clearTimeout(timer) // Clear the timeout if the component unmounts or effect re-runs
    }
  }, [pathname, searchParams]) // Dependency array: Effect re-runs when pathname or searchParams change

  // NProgress handles the visual aspect by injecting elements into the DOM,
  // so there's no need to render any JSX directly from this component.
  return null
}

export default TopSliderLoader
