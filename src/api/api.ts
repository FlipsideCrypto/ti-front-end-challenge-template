import { AxiosPromise } from "axios";
import client from "./client";

export type ProjectVerticals = {
  project_id: string;
  verticals: string[];
};

export type Project = {
  id: string;
  created_at: string;
  name: string;
  slug: string;
  symbol: string;
};

// retrieves an array of project ids with its verticals
// ex: 
// [
//   {
//       "project_id": "6b0c9fa1-ad31-4333-b5ec-da848451a591",
//       "verticals": [
//           "AMM",
//           "Oracle"
//       ]
//   },
// ]
export async function getProjectVerticals(): Promise<AxiosPromise<ProjectVerticals[]>> {
  let result = await client.get("https://api.flipsidecrypto.com/api/v2/verticals/projects");
  return result.data
}

// retrieves a single project by id
// ex:
// {
//   "id": "d0dc6fe2-a096-4315-b101-52c0249ddd3e",
//   "name": "Compound",
//   "slug": "compound",
//   "symbol": "COMP",
// }
export async function getProjectById(id: string): Promise<AxiosPromise<Project>> {
  let result = await client.get(`https://api.flipsidecrypto.com/api/v2/projects/${id}`);
  return result.data
}

// retrieves all projects
// ex:
// [
//   {
//     "id": "d0dc6fe2-a096-4315-b101-52c0249ddd3e",
//     "name": "Compound",
//     "slug": "compound",
//     "symbol": "COMP",
//   }
// ]
export async function getProjects(): Promise<AxiosPromise<Project[]>> {
  let result = await client.get(`https://api.flipsidecrypto.com/api/v2/projects/rated/all`);
  return result.data
}