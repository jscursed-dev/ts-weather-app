export const getAPIData = async (url: URL): Promise<Response> => {
  let data: Response;

  data = await fetch(url).then((data) => data);

  if (data.status !== 200) {
    const errorMessage = `API fetch failed. Code: ${data.status}`;

    if (data.status == 404) {
      console.error(errorMessage);
      throw new Error("Incorrect city name");
    }

    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  return data;
};
