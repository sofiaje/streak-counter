import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

//font

//pages
import Root from "./Pages/Root"
import Home from './Pages/home'
import NewCounter from './Pages/NewCounter'
import ErrorPage from './pages/ErrorPage'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} >
        <Route index element={<Home />} />
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
