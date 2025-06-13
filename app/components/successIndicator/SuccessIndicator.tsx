import React, { useState, useEffect } from 'react'
import styles from './SuccessIndicator.module.css'

interface SuccessIndicatorProps {
  success: boolean
  loadingMessage: string
  successMessage: string
}

const SuccessIndicator: React.FC<SuccessIndicatorProps> = ({
  success,
  successMessage,
  loadingMessage,
}) => {
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (success) {
      // Small delay to allow loading animation to be seen, then trigger success
      const timer = setTimeout(() => {
        setShowSuccess(true)
      }, 500) // Adjust this delay as needed for your desired effect
      return () => clearTimeout(timer)
    } else {
      setShowSuccess(false) // Reset if success goes back to false
    }
  }, [success])

  return (
    <div className={styles.container}>
      {!showSuccess &&
        !success && ( // Show loading only if not yet successful and success prop is false
          <div className={styles.loadingWrapper}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>{loadingMessage}</p>
          </div>
        )}

      {success && ( // Render success content only when success prop is true
        <div
          className={`${styles.successWrapper} ${
            showSuccess ? styles.successEnterActive : ''
          }`}
        >
          <svg
            className={styles.checkmark}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className={styles.checkmarkCircle}
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className={styles.checkmarkCheck}
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
          <p className={styles.successMessage}>{successMessage}</p>
        </div>
      )}
    </div>
  )
}

export default SuccessIndicator
