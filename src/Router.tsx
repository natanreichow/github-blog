import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './Layout'
import { Home } from './pages/Home'
import { Publication } from './pages/Publication'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Publication/:issueNumber" element={<Publication />} />
      </Route>
    </Routes>
  )
}
