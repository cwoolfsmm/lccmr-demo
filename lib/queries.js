// HOME PAGE CONTENT TYPE
export const HOME_GRAPHQL_FIELDS = `
  query {
    homeCollection {
      items {
        homeTitle
        featureStory(preview: false, locale: "en-US") {
          title
          subtitle
          content {
            json
          }
          mediaCollection {
            items {
              url
            }
          }
        }
      }
    }
  }
`;

// HEADER SECTION CONTENT TYPE
export const HEADER_GRAPHQL_FIELDS = `
  query {
      headerCollection {
        items {
          headerTitle
          logo {
            url
          }
      }
    }
  }
`;

// STORY SECTION CONTENT TYPE
export const STORY_GRAPHQL_FIELDS = `
  query {
    storySectionCollection {
      items {
        title
        subtitle
        content {
          json
        }
        mediaCollection {
          items {
            url
          }
        }
        storyLink
      }
    }
  }
`;