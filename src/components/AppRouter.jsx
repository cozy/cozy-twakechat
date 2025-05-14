import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppLayout from '@/components/AppLayout'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
