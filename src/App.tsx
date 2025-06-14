import React, { useEffect } from "react";
import { useAppSelector } from "./hooks/useAppSelector";
import { useAppDispatch } from "./hooks/useAppDispathc";
import { fetchCountries } from "./features/countries/countriesAPI";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";

const router = createBrowserRouter([
  { path: "/", element: <Root />, children: [{}] },
]);

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { countries, status, error } = useAppSelector(
    (state) => state.countries
  );
  console.log(countries);
  console.log(status);
  console.log(error);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
