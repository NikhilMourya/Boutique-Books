import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from "./page/HomePage"
import './App.css'
import Header from './components/Header';

export default function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <HomePage />
    </>
  )
}