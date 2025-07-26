'use client';
import React from 'react';
import PrimaryButton from './PrimaryButton';
import { useLogin } from '../contexts/LoginContex';

export default function Auth() {
  const { toggleForm } = useLogin();

  return <PrimaryButton onPress={toggleForm}>Sign In</PrimaryButton>;
}
