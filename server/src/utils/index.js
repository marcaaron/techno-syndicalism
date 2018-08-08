require('dotenv').config();
const jwt = require('jsonwebtoken')
console.log(process.env.JWT_SECRET);
function getUserId(context) {
  const Authorization = context.req.get('Authorization');
  if (Authorization!=='null') {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    return userId
  }
  // throw new Error('Not authenticated');
}

function capitalize(word){
  return word.toLowerCase()[0].toUpperCase()+word.slice(1);
}

function queryToNormalizedArray(query){
  return [
    ...query.split(' ')
    .map(word=>{
      return {
        name_contains: word.toLowerCase()
      }
    }),
    ...query.split(' ')
    .map(word=>{
      return {
        name_contains: capitalize(word)
      }
    })
  ]
}

module.exports = {
  getUserId,
  capitalize,
  queryToNormalizedArray
}
