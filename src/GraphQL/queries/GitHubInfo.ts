const QUERY = `
  {
    user(login: "Miguel-A-Jara") {
      pinnedItems(first: 5) {
        totalCount
        edges {
          node {
            ... on Repository {
              name
              primaryLanguage {
                name
                color
              }
              url
              description
              homepageUrl
            }
          }
        }
      }
    }
  }`
;

export default QUERY;