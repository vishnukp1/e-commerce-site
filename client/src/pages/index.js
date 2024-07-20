import { lazy } from "react";

const HomePage = lazy(() => import("./home-page/Home.jsx"));
const CartPage= lazy(()=>import("./cart-modal/Cart.jsx"))

export { HomePage,CartPage };