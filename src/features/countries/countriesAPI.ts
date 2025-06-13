import type { Country } from "../../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch countries");
    }
    const data = await res.json();
    return data as Country[];
  }
);
