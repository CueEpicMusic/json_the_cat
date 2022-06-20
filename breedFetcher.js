const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request.get(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error);
        return;
      } else {
        const data = JSON.parse(body);
        if (response.statusCode !== 200) {
          callback(response.statusCode);
          return;
        }
        if (data.length === 0) {
          callback(error, null);
          return;
        }
        callback(error, data[0].description);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
