import { HOME_GRAPHQL_FIELDS, HEADER_GRAPHQL_FIELDS, STORY_GRAPHQL_FIELDS } from "./queries";

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_GRAPHQL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`;


async function fetchGraphQL (query, variables = {}) {
  const response = await fetch(CONTENTFUL_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  const { data, errors } = await response.json();

  if (errors) {
    console.error('GraphQL errors:', errors);
    throw new Error('Failed to fetch data from Contentful');
  }

  return data;
};

function extractEntries(entries, collectionName) {
  if (!entries || !entries[collectionName]) {
    console.error(`Collection "${collectionName}" not found in the response.`);
    return [];
  }

  return entries[collectionName].items || [];
}

export async function getHeader() {
  const entries = await fetchGraphQL(HEADER_GRAPHQL_FIELDS);
  return extractEntries(entries, 'headerCollection');
}

export async function getHome() {
  const entries = await fetchGraphQL(HOME_GRAPHQL_FIELDS);
  return extractEntries(entries, 'homeCollection');
}

export async function getStory() {
  const entries = await fetchGraphQL(STORY_GRAPHQL_FIELDS);
  return extractEntries(entries, 'storySectionCollection');
}

export async function getAllEntries() {
  const homeEntries = await getHome();
  const headerEntries = await getHeader();
  const storyEntries = await getStory();

  return {
    home: homeEntries,
    header: headerEntries,
    story: storyEntries,
  };
}