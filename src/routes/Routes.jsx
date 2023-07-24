import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Register from "../pages/log&reg/Register";
import Login from "../pages/log&reg/Login";
import Collage from "../pages/collage/Collage";
import Admission from "../pages/admission/Admission";
import CollageDetails from "../components/CollageDetails";
import AllCollage from "../pages/collage/AllCollage";
import CollageD from "../components/CollageD";
import AdmitStudent from "../pages/admission/AdmitStudent";
import MyCollage from "../pages/admission/MyCollage";
import PrivateRoute from "./PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/', element: <Layout></Layout>,
        children: [
            { path: '/', element: <Home></Home> },
            {path: '/register', element: <Register></Register>},
            {path: '/login', element: <Login></Login>},
            {path: '/collages', element: <AllCollage></AllCollage>},
            {path: '/admission', element: <Admission></Admission>},
            {path: '/collage/:id', element: <PrivateRoute><CollageDetails></CollageDetails></PrivateRoute>},
            {path: '/collage/details/:id', element: <PrivateRoute><CollageD></CollageD></PrivateRoute>},
            {path: '/admission/:id', element: <PrivateRoute><AdmitStudent></AdmitStudent></PrivateRoute>},
            {path: '/mycollage', element: <MyCollage></MyCollage>},
        ]
    }
])

