/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import FaceDetection from "views/examples/FaceDetection.js";
import GroupDetection from "views/examples/GroupDetection.js";
import FoodDetection from "views/examples/FoodDetection.js";
import VehicleDetection from "views/examples/VehicleDetection.js";
import InteractionDetection from "views/examples/InteractionDetection.js";
import WashroomDetection from "views/examples/WashroomDetection.js";
import Login from "views/examples/Login.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/face-detection",
    name: "Face Recognition",
    icon: "ni ni-bold-right text-danger",
    component: FaceDetection,
    layout: "/admin"
  },
  {
    path: "/group-detection",
    name: "Arrived People",
    icon: "ni ni-bold-right text-success",
    component: GroupDetection,
    layout: "/admin"
  },
  {
    path: "/food-detection",
    name: "Ordered Food Items",
    icon: "ni ni-bold-right text-danger",
    component: FoodDetection,
    layout: "/admin"
  },
  {
    path: "/vehicle-detection",
    name: "Vehicles parked",
    icon: "ni ni-bold-right text-success",
    component: VehicleDetection,
    layout: "/admin"
  },
  {
    path: "/interaction-detection",
    name: "Payment Interactions",
    icon: "ni ni-bold-right text-danger",
    component: InteractionDetection,
    layout: "/admin"
  },
  {
    path: "/washroom-access-detection",
    name: "Wash Room Access",
    icon: "ni ni-bold-right text-success",
    component: WashroomDetection,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-user-run text-default",
    component: Login,
    layout: "/auth"
  },

];
export default routes;
