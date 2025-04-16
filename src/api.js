import axios from "axios";

export const fetchPhotos = async (query = "corgi", page) => {
  const result = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page: page,
      per_page: 20,
      lang: "en",
    },
    headers: {
      Authorization: "Client-ID PAw1xzDv4lVsmWo-nxt5BAI2oOR2p3OabjrFogoXDIA",
    },
  });
  return result.data;
};
