'use client'
import React from 'react'
import { Auth } from 'src/contexts/UserContext'

export default function Logout() {

  const { logOut } = Auth();

  logOut();

  // return <></>
}
