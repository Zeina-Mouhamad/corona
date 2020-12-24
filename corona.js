function showinformation() {
  var name = document.getElementById('name').value;
  var l = document.getElementById('new');
  var r = document.createElement('tr');
  fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.Countries.length; i++) {
        //console.log(json.Countries[i].Country)

        if (name == json.Countries[i].Country) {
          var x = document.createElement('td');
          x.innerHTML = json.Countries[i].Country;
          l.appendChild(x);
          var x = document.createElement('td');
          x.innerHTML = json.Countries[i].NewConfirmed;
          l.appendChild(x);
          var x = document.createElement('td');
          x.innerHTML = json.Countries[i].NewRecovered;
          l.appendChild(x);
          var x = document.createElement('td');
          x.innerHTML = json.Countries[i].NewDeaths;
          l.appendChild(x);
        }

        l.appendChild(r);
      }

    })
}
