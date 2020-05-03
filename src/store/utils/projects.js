import axios from "axios";

export function getProjects() {
  axios.get("https://api.npms.io/v2/search?q=vuepress").then(res => {
    return res;
  });
}
