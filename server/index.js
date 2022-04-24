var emailable = require("emailable");

emailable.verify("jarrett@emailable.com")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
