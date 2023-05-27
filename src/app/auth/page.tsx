import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url'
import React from 'react'

export default function page() {

  const params = new URLSearchParams()

  console.log(params)
  return (
    <div>page</div>
  )
}
