import * as contentful from 'contentful';

const spaceId = process.env.REACT_APP_SPACE_ID;
const apiKey = process.env.REACT_APP_API_KEY;
const client = contentful.createClientApi({
  space: spaceId,
  accessToken: apiKey,
});

export default client;
