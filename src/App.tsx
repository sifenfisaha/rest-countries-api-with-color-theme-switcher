import React, { useEffect } from "react";
import { useAppSelector } from "./hooks/useAppSelector";
import { useAppDispatch } from "./hooks/useAppDispathc";
import { fetchCountries } from "./features/countries/countriesAPI";

const App: React.FC = () => {
  // const countries = useAppSelector((state) => state.countries);
  // console.log(countries);
  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     try {
  //       const res = await fetch(
  //         "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3"
  //       );
  //       const data = await res.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Failed to fetch countries:", error);
  //     }
  //   };

  //   fetchCountries();
  // }, []);
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

  return <div>App</div>;
};

export default App;
