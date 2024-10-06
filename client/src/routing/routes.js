import { HomePage,CartPage } from "../pages";
import { homePath,cartPath} from "./route.constant";

const routes = [
  {
    path: homePath,
    component: HomePage, 
    exact: true,
  },
  {
    path: cartPath,
    component: CartPage, 
    exact: true,
  },
 
];

export default routes;