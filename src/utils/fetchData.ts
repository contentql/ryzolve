import axios from "axios";
const graphQLEndpoint = process.env.NEXT_PUBLIC_GRAPHQL;

const fetchData = async (query: any, { variables = {} }) => {
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const { data } = await axios({
      url: graphQLEndpoint,
      method: "POST",
      headers: headers,
      data: { query, variables },
    });

    return data;
  } catch (error) {
    console.log("error", error);
    throw new Error();
  }
};

export default fetchData;
