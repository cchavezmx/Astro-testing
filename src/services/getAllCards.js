import queryGraphQL from '../utils/queryGraphQL';

export const getAllCards = async () => {
  const query = `
  {
    tests{
      id
      src
    }
  }`

  const { data } = await queryGraphQL({ query });  
  const { tests } = data;
  return tests;
}