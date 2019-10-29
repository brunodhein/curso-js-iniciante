var requestFunction = function() {
  return new Promise(function(resolve, reject) {
    var newRequest = new XMLHttpRequest();

    newRequest.open("GET", "https://api.github.com/users/diego3g");
    newRequest.send(null);

    newRequest.addEventListener("readystatechange", function() {
      if (newRequest.readyState === 4) {
        if (newRequest.status === 200) {
          var response = JSON.parse(newRequest.responseText);
          if (response.followers >= 20) {
            resolve(response);
          } else {
            reject("Menos de 20 seguidores");
          }
        } else {
          reject("Algo de errado não está certo");
        }
      }
    });
  });
};
requestFunction()
  .then(function() {
    console.log("Mais de 20 seguidores");
  })
  .catch(function(error) {
    console.log(error);
  });
