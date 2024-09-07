"use server";

import { customFetch } from "./custom-fetch";

export async function getAll(params) {
  const url = new URL(`${process.env.API_URL}/countries`);
  url.search = new URLSearchParams(params);

  const res = await customFetch(url, { cache: "no-cache" });
  if (!res) return null;
  const { data } = res;

  return data.countries;
}

export async function show(code) {
  const url = new URL(`${process.env.API_URL}/countries/${code}`);
  const res = await customFetch(url, { cache: "no-cache" });
  if (!res) return null;
  const { data } = res;
  return data;
}
