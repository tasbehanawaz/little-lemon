import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./Root"
import Reservations from "./Reservations"
import ConfirmedBooking from "./ConfirmedBooking"
import './App.css';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
    },
    {
        path: "/reservations",
        element: <Reservations/>,
    },
    {
        path: "/booking/confirm",
        element: <ConfirmedBooking/>
    }
])


function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
