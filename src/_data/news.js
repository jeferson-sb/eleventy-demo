require("dotenv").config();
const fetch = require("node-fetch");
const countries = require("./countries.json");

async function getNewsByCountry(country) {
  try {
    const response = await fetch(
      `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.API_KEY}&pageSize=5`
    );
    const data = await response.json();
    return {
      country: country,
      articles: data.articles,
    };
  } catch (error) {
    console.error(error);
  }
}

module.exports = async function () {
  const newsProms = countries.map(getNewsByCountry);
  return Promise.all(newsProms).then((newsObj) => {
    console.log(newsObj);
    return [...newsObj];
  });
};
