import React from 'react'
import { Outlet } from 'react-router-dom'

import { BarComponent } from 'cozy-bar'

import Chat from './Icons/Chat'
import ChatText from './Icons/ChatText'

const AppLayout = () => {
  return (
    <>
      <BarComponent
        searchOptions={{ enabled: false }}
        appIcon={Chat}
        appTextIcon={ChatText}
      />
      <Outlet />
    </>
  )
}

export default AppLayout
