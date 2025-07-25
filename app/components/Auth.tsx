'use client';
import React from 'react';
import PrimaryButton from './PrimaryButton';

export default function Auth() {
  function signIn() {
    console.log('signIn');
  }
  return <PrimaryButton onPress={signIn}>Sign In</PrimaryButton>;
}
