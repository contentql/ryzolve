import fetchData from "utils/fetchData";

export const getHomePageData = async () => {
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
            homePage{
                data{
                attributes{
                  services{
                    name
                    description
                    link
                  }
                    hero{
                    id
                    title
                    subtitle
                    services{
                      description
                    }
                    }
                    ourSolutions{
                    id
                    title
                    description
                    personalAgency{
                        item
                    }
                    }
                    ourStrategy{
                    title
                    steps{
                        id
                        title
                        strategy_step_list{
                        id
                        item
                        }
                        
                    }
                    }
                    aboutUs{
                    title
                    description
                    }
                    howItWorks{
                    id
                    title
                    working_steps{
                        id
                        name
                        description
                    }
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
  return data.data.homePage.data.attributes;
};
