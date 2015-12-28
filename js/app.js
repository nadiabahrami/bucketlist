var stadiumInfo = [
  ["AT&T Park", "San Francisco, CA", "San Francisco Giants", "37.778473", "-122.389595"],
  ["Angel Stadium Anaheim", "Anaheim, CA", "Los Angeles Angels", "33.799925", "-117.883194"],
  ["Busch Stadium", "St. Louis, MO", "St. Louis Cardinals", "38.622317", "-90.193891"],
  ["Chase Field", "Phoenix, AZ", "Arizona Diamondbacks", "33.445526", "-112.066721"],
  ["Citi Field", "New York, NY", "New York Mets", "40.756337", "-73.846043"],
  ["Citizens Bank Park", "Philadelphia, PA", "Philadelphia Phillies", "39.905547", "-75.166589"],
  ["Comerica Park", "Detroit, MI", "Detroit Tigers", "42.339227", "-83.049506"],
  ["Coors Field", "Denver, CO", "Colorado Rockies", "39.755891", "-104.994198"],
  ["Dodger Stadium", "Los Angeles", "Los Angeles Dodgers", "34.072724", "-118.240646"],
  ["Fenway Park", "Boston, MA", "Boston Red Sox", "42.346619", "-71.096961"],
  ["Globe Life Park", "Arlington, TX", "Texas Rangers", "32.751147", "-97.082454"],
  ["Great American Ball Park", "Cincinnati, OH", "Cincinnati Reds", "39.097935", "-84.508158"],
  ["Kauffman Stadium", "Kansas City, MO", "Kansas City Royals", "39.051098", "-94.481115"],
  ["Marlins Park", "Miami, FL", "Miami Marlins", "25.778655", "-80.220305"],
  ["Miller Park", "Milwaukee, WI", "Milwaukee Brewers", "43.027982", "-87.971165"],
  ["Minute Maid Park", "Houston, TX", "Houston Astros", "29.756965", "-95.354824"],
  ["Nationals Park", "Washington, DC", "Washington Nationals", "38.873010", "-77.007457"],
  ["O.co Coliseum", "Oakland, CA", "Oakland Athletics", "37.751605", "-122.200523"],
  ["Oriole Park at Camden Yards", "Baltimore, MD", "Baltimore Orioles", "39.283964", "-76.621618"],
  ["PNC Park", "Pittsburgh, PA", "Pittsburgh Pirates", "40.447307", "-80.006841"],
  ["Petco Park", "San Diego, CA", "San Diego Padres", "32.707710", "-117.157097"],
  ["Progressive Field", "Cleveland, OH", "Cleveland Indians", "41.496192", "-81.685238"],
  ["Rogers Centre", "Toronto, ON", "Toronto Blue Jays", "43.641111", "-79.389675"],
  ["Safeco Field", "Seattle, WA", "Seattle Mariners", "47.591358", "-122.332283"],
  ["Target Field", "Minneapolis, MN", "Minnesota Twins", "44.981713", "-93.277347"],
  ["Tropicana Field", "St. Petersburg, FL", "Tampa Bay Rays", "27.768160", "-82.653465"],
  ["Turner Field", "Atlanta, GA", "Atlanta Braves", "33.734805", "-84.389996"],
  ["U.S. Cellular Field", "Chicago, IL", "Chicago White Sox", "41.829908", "-87.633540"],
  ["Wrigley Field", "Chicago, IL", "Chicago Cubs", "41.947856", "-87.655887"],
  ["Yankee Stadium", "Bronx, NY", "New York Yankees", "40.829327", "-73.927735"]
];
var allStadiums = [];

function Stadium (name, city, team, long, lat){
  this.name = name;
  this.city = city;
  this.team = team;
  this.long = long;
  this.lat = lat;
}

(function makeStadiums (){
  for (var i = 0; i < stadiumInfo.length; i++){
    allStadiums.push(new Stadium(
      stadiumInfo[i][0],
      stadiumInfo[i][1],
      stadiumInfo[i][2],
      stadiumInfo[i][3],
      stadiumInfo[i][4]
    ));
  }
})();

function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 38.0, lng: -95.35},
  });
  directionsDisplay.setMap(map);

  document.getElementById('submit').addEventListener('click', function() {
    userSelects.coordinates = [];
    userSelects.checkboxCheck();
    calculateAndDisplayRoute(directionsService, directionsDisplay);
});

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var input = document.getElementById('address-box');
  var waypts = [];
  var checkboxArray = [];
  checkboxArray = userSelects.coordinates;
  for (var i = 0; i < checkboxArray.length; i++) {
    waypts.push({
      location: new google.maps.LatLng(parseFloat(checkboxArray[i][1]), parseFloat(checkboxArray[i][0])),
      stopover: true
    });
  }
  if (input.value !== ''){
    waypts.push({
      location: input.value,
      stopover: true
    });
  }

  directionsService.route({
    origin: "Seattle, WA",
    destination: "Ballard, WA",
    waypoints: waypts,
    optimizeWaypoints: true,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      var route = response.routes[0];
      var summaryPanel = document.getElementById('directions-panel');
      summaryPanel.innerHTML = '';
      for (var i = 0; i < route.legs.length; i++) {
        var routeSegment = i + 1;
        summaryPanel.innerHTML += '<b>Drive: ' + routeSegment +
            '</b><br>';
        summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
        summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
        summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
      }
    } else {
      window.alert('Directions request failed due to ' + status);
      }
    });
  }
}

var inputHandler = {
  userKey: '',
  userZip: '',
  listContainer: document.getElementById('list'),

  createStadiumList: function(){
    userKey = localStorage.getItem("active_user");
    userZip = JSON.parse(localStorage.getItem(userKey))[0].zip;
    var stadiumList = document.createElement("ul");
    for (var i = 0; i < allStadiums.length; i++){
      var stadiumEl = document.createElement("li");
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.id = allStadiums[i].name.toLowerCase().replace(" ", "_");
      checkbox.name= "checky"
      var label = document.createElement('label')
      label.htmlFor = "id";
      label.appendChild(document.createTextNode(allStadiums[i].team));
      stadiumEl.appendChild(checkbox);
      stadiumEl.appendChild(label);
      stadiumList.appendChild(stadiumEl);
    }
    inputHandler.listContainer.appendChild(stadiumList);
  }
};

var userSelects = {
  coordinates: [],
  planTrip: document.getElementById('button'),

  checkboxCheck: function(){
    var checkedEls = [];
    var checkedObj = [];
    var yes = document.getElementsByName("checky");
    for (var i = 0; i < yes.length; i++){
      if(yes[i].checked){
        checkedEls.push(yes[i].id);
      }
    };
    for(var i = 0; i < checkedEls.length; i++){
      for(var j = 0; j < allStadiums.length; j++){
        var tempString = allStadiums[j].name.toLowerCase().replace(" ", "_");
        if(checkedEls[i] === tempString){
          var mini = [];
          checkedObj.push(allStadiums[j]);
          mini.push(allStadiums[j].lat, allStadiums[j].long);
          this.coordinates.push(mini);
        }
      }
    }
  },
};

inputHandler.createStadiumList();
