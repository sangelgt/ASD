import React from 'react'
import Home from './pages/Home'
import Diagnostico from './pages/Diagnostico'
import Metodologia from './pages/Metodologia'
import Casos from './pages/Casos'
import Privacidad from './pages/Privacidad'

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/diagnostico', element: <Diagnostico /> },
  { path: '/metodologia', element: <Metodologia /> },
  { path: '/casos', element: <Casos /> },
  { path: '/privacidad', element: <Privacidad /> }
]

export default routes
