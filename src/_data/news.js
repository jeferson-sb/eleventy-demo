require('dotenv').config();
const fetch = require('node-fetch');

module.exports = async function getNewsArticles() {
  try {
    const response = await fetch(
      `http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}&pageSize=5`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
