import { createSlice } from "@reduxjs/toolkit";
import type { Country } from "../../types/types";
import { fetchCountries } from "./countriesAPI";

interface CountriesState {
  countries: Country[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CountriesState = {
  countries: [],
  status: "idle",
  error: null,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default countriesSlice.reducer;

export const countriesReducer = countriesSlice.reducer;
