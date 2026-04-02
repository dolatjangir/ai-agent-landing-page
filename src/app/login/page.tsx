import React from 'react'
import Login from './clientLogin'
import { generateSEOMetadata } from '../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <Login/>
}
