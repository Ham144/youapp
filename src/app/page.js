"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
  const route = useRouter()

  return (
    <div>
      <h1>home</h1>
    </div>
  )
}

export default Home