import axios from "axios";

export async function getProjects(from) {
  const response = await axios.get(
    `https://api.npms.io/v2/search?q=vuepress-plugin&from=${from}`
  );

  console.log(response.data);

  return response.data;
}
