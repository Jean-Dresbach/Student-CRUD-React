import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Student } from "../pages/Students"
import { AssessmentList } from "../pages/AssessmentList"
import { Login } from "../pages/Login"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Student />
  },
  {
    path: "/assessments",
    element: <AssessmentList />
  },
  {
    path: "/login",
    element: <Login />
  }
])

function Routes() {
  return <RouterProvider router={router} />
}

export default Routes
