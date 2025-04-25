import React from 'react'
import styles from './page.module.css'
import SignInWithGoogle from '../components/SignInWithGoogle'
import SignInInput from '../components/SignInInput'
import SignInForm from '../components/SignInForm'

export default function page() {
  return (
    <main className={styles.page}>
      <section className="contact section">
        <h5 className="fw-bold">Sign in or create account</h5>
        <SignInForm>
          <div className="row gy-4">
            <div className="col-12">
              <SignInInput />
            </div>

            <div className="col-12 text-center d-flex flex-column gap-3">
              <button type="submit" className="w-100">
                Sign In
              </button>
              <div className="d-flex align-items-center my-4">
                <hr className="flex-grow-1 border border-secondary opacity-50" />
                <span className="mx-3 text-muted fw-medium small">OR</span>
                <hr className="flex-grow-1 border border-secondary opacity-50" />
              </div>
              <SignInWithGoogle />
            </div>
          </div>
        </SignInForm>
      </section>
    </main>
  )
}
