import fetchData from "utils/fetchData";

export const getAboutUsData = async () => {
  const data = await fetchData(
    `
    query{
        ryzolveAboutUs{
       data{
         attributes{
           description
           title
           ourPhilosophy
         }
       }
     }
   }
    
  `,
    {
      variables: {},
    }
  );
  return data.data.ryzolveAboutUs.data.attributes;
};
