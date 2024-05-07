"use client"
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'

interface PropsType {
    children: ReactNode;
}

const AuthProvider = ({children}: PropsType) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default AuthProvider
