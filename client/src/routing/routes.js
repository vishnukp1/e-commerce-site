import Home from "../pages/home-page/Home";
import { homePath} from "./route.constant";

const routes = [
  {
    path: homePath,
    component: Home, 
    exact: true,
  },
 
];

export default routes;