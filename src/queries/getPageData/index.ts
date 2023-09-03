import fetchData from 'utils/fetchData';

export const getPageData = async (queryPage: string) => {
  const data = await fetchData(
    `
      query{
            ${queryPage}{
            data{
                attributes{
                Hero{
                    id
                    title
                    subtitle
                }
                Solutions{
                    id
                    title
                    description
                    personalAgency{
                        id
                        item
                    }
                }
                About{
                    id
                    title
                    description
                }
                }
            }
            }
}
  `,
    {
      variables: {},
    },
  );
  return data.data[`${queryPage}`].data.attributes;
};
