import fetchData from "utils/fetchData";

export const getFooterData = async () => {
  const data = await fetchData(
    `
    query{
        footer{
            data{
            attributes{
                JoinTheCommunity
                NeedHelp{
                help{
                    id
                    name
                    link
                }
                }
                LearnMore{
                help{
                    id
                    name
                    link
                }
                }
                ContactUs{
                id
                address
                email
                phone
                }
            }
            }
        }
    }
  `,
    {
      variables: {},
    }
  );
  return data.data.footer.data.attributes;
};

export const getSocialMediaLinks = async () => {
  const data = await fetchData(
    `
    query{
        socialMediaLinks{
            data{
            attributes{
                socialMediaLinks{
                id
                name
                link
                }
            }      
            }
        }
    }
  `,
    {
      variables: {},
    }
  );
  return data.data.socialMediaLinks.data[0].attributes;
};
