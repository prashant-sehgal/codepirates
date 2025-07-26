'use client';
import React from 'react';
import SecondaryButton from './SecondaryButton';
import Seperator from './Seperator';
import SocialAuth from './SocialAuth';
import PageBlur from './PageBlur';
import { useLogin } from '../contexts/LoginContex';

export default function Login() {
  const { isFormActive, toggleForm } = useLogin();

  if (!isFormActive) return;

  return (
    <PageBlur>
      <div className="relative bg-stone-950 text-sm p-8 rounded-md shadow-xl border border-stone-700 w-md">
        <button
          className="absolute cursor-pointer top-1 right-2 text-stone-400 text-2xl hover:text-white focus:outline-none"
          aria-label="Close"
          onClick={toggleForm}
        >
          <i className="ri-close-line"></i>
        </button>
        <h1 className="text-2xl text-center">Sign In</h1>
        <form className="mt-8">
          <div className="input-item">
            <label
              htmlFor="email"
              className="block text-stone-300 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md bg-stone-800 text-white border border-stone-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@example.com"
              required
            />
            <button
              type="submit"
              className="mt-2 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-stone-950 transition duration-200"
            >
              Continue with Email
            </button>
          </div>
        </form>
        <Seperator />
        <div className="flex flex-col gap-2">
          <SecondaryButton className="w-full py-2 px-4" onPress={() => ''}>
            <SocialAuth imgSrc="/google-icon.svg" title="Continue wth Google" />
          </SecondaryButton>
          <SecondaryButton className="w-full py-2 px-4" onPress={() => ''}>
            <SocialAuth
              imgSrc="/microsoft-icon.svg"
              title="Continue wth Microsoft"
            />
          </SecondaryButton>
          <SecondaryButton className="w-full py-2 px-4" onPress={() => ''}>
            <SocialAuth imgSrc="/apple-icon.svg" title="Continue wth Apple" />
          </SecondaryButton>
          <SecondaryButton className="w-full py-2 px-4" onPress={() => ''}>
            <SocialAuth
              imgSrc="/facebook-icon.svg"
              title="Continue wth Facebook"
            />
          </SecondaryButton>
        </div>
      </div>
    </PageBlur>
  );
}
