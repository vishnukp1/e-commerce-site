import { Suspense } from "react";
import { AppHeader } from "../../cores";
import { Route, Routes } from "react-router-dom";

import { routes } from "../../routing";

const AppLayout = () => {
  return (
    <>
      <main>
        <AppHeader />
        <div className="">
          <section>
            <Suspense fallback={<div></div>}>
              <Routes>
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}
              </Routes>
            </Suspense>
          </section>
        </div>
      </main>
    </>
  );
};

export default AppLayout;
