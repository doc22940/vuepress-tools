import axios from "axios";

export async function getThemes(from) {
  try {
    const response = await axios.get(
      `https://api.npms.io/v2/search?q=vuepress-theme&from=${from}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
