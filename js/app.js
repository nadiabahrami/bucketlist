var stadiumInfo = [
  ["AT&T Park", "San Francisco, CA", "Giants", "37.778473", "-122.389595"],
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
    allStadiums.push(new Stadium(stadiumInfo[i][0], stadiumInfo[i][1], stadiumInfo[i][2], stadiumInfo[i][3], stadiumInfo[i][4]));
  }
})();

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 38.0, lng: -95.35},
    zoom: 4
  });
}

var inputHandler = {
  listContainer: document.getElementById('list'),


  createStadiumList: function(){
    var stadiumList = document.createElement("ul");
    for (var i = 0; i < allStadiums.length; i++){
      var stadiumEl = document.createElement("li");
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.id = allStadiums[i].name;
      var label = document.createElement('label')
      label.htmlFor = "id";
      label.appendChild(document.createTextNode(allStadiums[i].team));
      stadiumList.appendChild(checkbox);
      stadiumList.appendChild(stadiumEl);
      stadiumEl.appendChild(checkbox);
      stadiumEl.appendChild(label);
      stadiumList.appendChild(stadiumEl);
    }
    inputHandler.listContainer.appendChild(stadiumList);
  }
}

inputHandler.createStadiumList();
