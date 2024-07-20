import { lazy } from "react";

const HomePage = lazy(() => import("./home-page/Home.jsx"));
const CartPage= lazy(()=>import("./cart-pages/Cart.jsx"))

export { HomePage,CartPage };
