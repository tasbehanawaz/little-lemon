import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./Root"
import Reservations from "./Reservations"
import ConfirmedBooking from "./ConfirmedBooking"
import './App.css';
import Header from "./Header";


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
    },

    {
        path: "/header",
        element: <Header/>
    },
])

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
