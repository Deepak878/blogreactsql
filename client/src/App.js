import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is Home!</div>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
