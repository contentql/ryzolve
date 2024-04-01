import fetchData from "utils/fetchData";

export const getNewsLetter = async () => {
  const data = await fetchData(
    `
    query{
        ryzolveContact{
          data{
            attributes{
              title
              description
            }
          }
        }
      }
    
  `,
    {
      variables: {},
    }
  );
  return data.data.ryzolveContact.data.attributes;
};
