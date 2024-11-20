import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: "4ubrnd3n",
  dataset: "development",
  apiVersion: "2022-03-07",
  token: process.env.SANITY_API_READ_TOKEN,
  useCdn: false,
});