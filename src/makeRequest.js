import axios from "axios";
const URL = "https://store-flexdb-eb5cy.ondigitalocean.app/api";
const KEY_API =
  "6722a68235ab72fb088c445097c75bf4e3ea65acee543fce35e608bc90b8a457be39266a506eeaf3de050fbd0fe91486e5f805dafc0c50f1050c45d05507ba405fe94544292dba9ec01dac207cfb89805c475151ffc811090d1ad172d4099200f2124b65a66fbdd30d9f1c2fd2e151c28501c86b148d9c9901b13c710fb431c0";
export const makeRequest = axios.create({
  baseURL: URL,
  headers: {
    Authorization: "bearer " + KEY_API,
  },
});
