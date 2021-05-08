var request = new XMLHttpRequest();

request.open('GET', 'http://ip.jsontest.com/', true);

request.onload = function () {
  var data = JSON.parse(this.response);
  console.log(data.ip);
}

request.send();