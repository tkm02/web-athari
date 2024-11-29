import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Acceuil = lazy(() => import("../pages/Acceuil"));
const Services = lazy(() => import("../pages/ServicesPage/ServicesPage"));

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback="Chargement...">
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/service" element={<Services />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
