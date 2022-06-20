const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request.get(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        return callback(error, null);
      }
      const data = JSON.parse(body);
      const breed = data[0];
      if (breed) {
        callback(null, breed.description);
      } else {
        callback(null);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
