var btn = document.querySelector("#btn");
var input = document.querySelector("#name");
var main = document.querySelector("#main");

var requestFunction = function() {
  return new Promise(function(resolve, reject) {
    var newRequest = new XMLHttpRequest();

    newRequest.open(
      "GET",
      "https://api.github.com/users/" + input.value + "/repos"
    );
    newRequest.send(null);

    newRequest.addEventListener("readystatechange", function() {
      if (newRequest.readyState === 4) {
        if (newRequest.status === 200) {
          var response = JSON.parse(newRequest.responseText);
          resolve(response);
          input.value = " ";
        } else {
          reject("Algo de errado não está certo");
          alert("Não encontrado");
        }
      }
    });
  });
};

var timerCall = function() {
  setTimeout(newCall, 2000);
};

function newCall() {
  requestFunction()
    .then(function(response) {
      var ulList = document.createElement("ul");

      for (var i = 0; i < response.length; i++) {
        var ulList_li = document.createElement("li");

        ulList.appendChild(ulList_li);
        ulList_li.append(response[i].name);
        main.appendChild(ulList);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}

btn.onclick = timerCall;
