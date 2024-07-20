
import { HomePage } from "../pages";
import { homePath} from "./route.constant";

const routes = [
  {
    path: homePath,
    component: HomePage, 
    exact: true,
  },
 
];

export default routes;