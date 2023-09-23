import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

//font

//pages
import Root from "./pages/Root"
import Home from './Pages/Home'
import NewCounter from './pages/NewCounter'
import ErrorPage from './pages/ErrorPage'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} >
        <Route index element={<Home />} />
        <Route path="/streak-counter" element={<Home />} />
        <Route path="/newcounter" element= {<NewCounter />}/>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  )

  return (
      <RouterProvider router={ router } />
  )
}

export default App
