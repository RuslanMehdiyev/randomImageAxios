const BASE_URL = "https://dog.ceo/api/breeds/image/random";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

async function getMethod() {
  let link = "";
  await axiosInstance.get().then((res) => {
    link = res.data;
  });
  return link;
}


