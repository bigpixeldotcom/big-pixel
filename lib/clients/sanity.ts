import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  apiVersion: "2022-03-07",
  token: process.env.SANITY_API_READ_TOKEN!,
  useCdn: false,
});