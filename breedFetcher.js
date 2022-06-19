const request = require("request");

const breed = process.argv[2];

const getCatBreed = function (breed) {
  request.get(
    `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    (error, response, body) => {
      if (error) {
        console.log("error:", error); // Print the error if one occurred
        return;
      } else {
        const data = JSON.parse(body);
        if (response.statusCode !== 200) {
          console.log(
            `Something went wrong with network, statusCode: ${response.statusCode}`
          );
          return;
        }
        if (data.length === 0) {
          console.log("Please specify a correct breed.");
          return;
        }
        console.log(data[0].description);
      }
    }
  );
};

getCatBreed(breed);
