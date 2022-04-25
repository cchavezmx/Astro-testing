const queryGraphQL = async ({ query, variables }) => {
 const response = await fetch('https://api-us-east-1.graphcms.com/v2/cl2d1t9dj4psw01ywe0aa4m70/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    }
  )
  .then(res => res.json())
  return response
}

export default queryGraphQL