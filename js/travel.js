var stadiumInfo = [
  ["AT&T Park", "San Francisco, CA", "San Francisco Giants", "37.778473", "-122.389595", "Giants.png"],
  ["Angel Stadium Anaheim", "Anaheim, CA", "Los Angeles Angels", "33.799925", "-117.883194", "Angels.png"],
  ["Busch Stadium", "St. Louis, MO", "St. Louis Cardinals", "38.622317", "-90.193891", "Cardinals.png"],
  ["Chase Field", "Phoenix, AZ", "Arizona Diamondbacks", "33.445526", "-112.066721", "Arizona.png"],
  ["Citi Field", "New York, NY", "New York Mets", "40.756337", "-73.846043", "Mets.png"],
  ["Citizens Bank Park", "Philadelphia, PA", "Philadelphia Phillies", "39.905547", "-75.166589", "Phillies.png"],
  ["Comerica Park", "Detroit, MI", "Detroit Tigers", "42.339227", "-83.049506", "Detroit.png"],
  ["Coors Field", "Denver, CO", "Colorado Rockies", "39.755891", "-104.994198", "Colorado.png"],
  ["Dodger Stadium", "Los Angeles", "Los Angeles Dodgers", "34.072724", "-118.240646", "Dodgers.png"],
  ["Fenway Park", "Boston, MA", "Boston Red Sox", "42.346619", "-71.096961", "Redsoxs.png"],
  ["Globe Life Park", "Arlington, TX", "Texas Rangers", "32.751147", "-97.082454", "Texas.png"],
  ["Great American Ball Park", "Cincinnati, OH", "Cincinnati Reds", "39.097935", "-84.508158", "Cincinnati.png"],
  ["Kauffman Stadium", "Kansas City, MO", "Kansas City Royals", "39.051098", "-94.481115", "Royals.png"],
  ["Marlins Park", "Miami, FL", "Miami Marlins", "25.778655", "-80.220305", "Miami.png"],
  ["Miller Park", "Milwaukee, WI", "Milwaukee Brewers", "43.027982", "-87.971165", "Milwaukee.png"],
  ["Minute Maid Park", "Houston, TX", "Houston Astros", "29.756965", "-95.354824", "Houston.png"],
  ["Nationals Park", "Washington, DC", "Washington Nationals", "38.873010", "-77.007457", "Nationals.png"],
  ["O.co Coliseum", "Oakland, CA", "Oakland Athletics", "37.751605", "-122.200523", "Oakland.png"],
  ["Oriole Park at Camden Yards", "Baltimore, MD", "Baltimore Orioles", "39.283964", "-76.621618", "Baltimore.png"],
  ["PNC Park", "Pittsburgh, PA", "Pittsburgh Pirates", "40.447307", "-80.006841", "Pirates.png"],
  ["Petco Park", "San Diego, CA", "San Diego Padres", "32.707710", "-117.157097", "Padres.png"],
  ["Progressive Field", "Cleveland, OH", "Cleveland Indians", "41.496192", "-81.685238", "Cleveland.png"],
  ["Rogers Centre", "Toronto, ON", "Toronto Blue Jays", "43.641111", "-79.389675", "Toronto.png"],
  ["Safeco Field", "Seattle, WA", "Seattle Mariners", "47.591358", "-122.332283", "Mariners.png"],
  ["Target Field", "Minneapolis, MN", "Minnesota Twins", "44.981713", "-93.277347", "Twins.png"],
  ["Tropicana Field", "St. Petersburg, FL", "Tampa Bay Rays", "27.768160", "-82.653465", "Tampa.png"],
  ["Turner Field", "Atlanta, GA", "Atlanta Braves", "33.734805", "-84.389996", "Atlanta.png"],
  ["U.S. Cellular Field", "Chicago, IL", "Chicago White Sox", "41.829908", "-87.633540", "Chicago.png"],
  ["Wrigley Field", "Chicago, IL", "Chicago Cubs", "41.947856", "-87.655887", "Cubs.png"],
  ["Yankee Stadium", "Bronx, NY", "New York Yankees", "40.829327", "-73.927735", "Yankees.png"]
];

var allStadiums = [];

function Stadium (name, city, team, long, lat, pic){
  this.name = name;
  this.city = city;
  this.team = team;
  this.long = long;
  this.lat = lat;
  this.pic = "img/stadium/" + pic
}

(function makeStadiums (){
  for (var i = 0; i < stadiumInfo.length; i++){
    allStadiums.push(new Stadium(stadiumInfo[i][0], stadiumInfo[i][1], stadiumInfo[i][2], stadiumInfo[i][3], stadiumInfo[i][4], stadiumInfo[i][5]));
  }
})();

var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var imgObj = new Image();
    imgObj.onload = function() {
      context.drawImage(imgObj,0,0);
};
imgObj.src = "img/bluemap.png";

var inputHandler = {
  dropPop: document.getElementById('drop'),

  createOptions: function (){
    for(var i=0; i<allStadiums.length; i++){
      var choice = document.createElement("option");
      choice.value = allStadiums[i].name.toLowerCase().replace(" ", "_");
      var label = document.createElement('label')
      label.appendChild(document.createTextNode(allStadiums[i].team));
      choice.appendChild(label);
      inputHandler.dropPop.appendChild(choice);
    };
  }
};

inputHandler.createOptions();

var userKey = localStorage.getItem("active_user");
var userArray = JSON.parse(localStorage.getItem(userKey));

var fullComments = [];
var tempComment = [];
var userComments = [];

var userCreates = {
  logContainer: document.getElementById('been'),

  createArray: function(){
    tempComment = [];
    this.team = drop.value;
    for(var i=0; i<allStadiums.length;i++){
      var tempName = allStadiums[i].name.toLowerCase().replace(" ", "_");
      if(this.team == tempName){
        this.team = allStadiums[i].pic;
        tempComment.push(this.team);
      }
    };
    this.date = date.value;
    tempComment.push(this.date);
    this.date = "";
    this.url = url.value;
    tempComment.push(this.url);
    this.words = words.value;
    tempComment.push(this.words);
    fullComments.push(tempComment);
    var mini = [];
    mini = userArray;
    mini[1]= fullComments;
    if(userComments.length ===0){
      userComments.push(mini);
    }else{
      var number = userComments.length
      for(var i = 0; i<number; i++){
        if(userComments[i][0].name===userArray[0].name){
          userComments[i] = mini;
        }else{
          userComments.push(mini);
        }
      };
    }
    userCreates.store();
    userCreates.createLog(tempComment);
  },

  store: function(){
      localStorage.setItem("destinations", JSON.stringify(userComments));
  },

  createLog:function(shuttle){
    for(var i=0; i<fullComments.length; i++){
      var inital = document.createElement("div");
      inital.id = "main"
      var second = document.createElement("div");
      second.id = "imgDiv";
      var third = document.createElement("img");
      third.id = "logoImg"
      third.src = shuttle[0];
      second.appendChild(third);
      inital.appendChild(second);
      var ninth = document.createElement("div");
      ninth.id = "ninth";
      var fourth = document.createElement("div");
      fourth.id = "topEdge";
      var fifth = document.createElement("p")
      fifth.id="pTop";
      fifth.textContent = shuttle[1];
      fourth.appendChild(fifth);
      var sixth = document.createElement("a");
      sixth.id = "linkTop"
      sixth.href = shuttle[2];
      sixth.textContent = shuttle[2];
      fourth.appendChild(sixth);
      ninth.appendChild(fourth);
      var seventh = document.createElement("div");
      seventh.id = "bottom";
      var eight = document.createElement("p");
      eight.id = "pBottom";
      eight.textContent = shuttle[3];
      seventh.appendChild(eight);
      ninth.appendChild(seventh);
      inital.appendChild(ninth);
    }
    this.logContainer.appendChild(inital);
  }
};

if(localStorage.destinations){
  userComments = JSON.parse(localStorage.getItem("destinations"));
  for(var k =0; k<userComments.length; k++){
    if(userComments[k][0].name===userKey){
      for(var j=0; j< userComments[k][1].length; j++){
      fullComments = userComments[k][1];
      var shuttle = userComments[k][1][j];
      userCreates.createLog(shuttle);
      };
    }
  };
}

document.getElementById('submit').addEventListener('click', function(event) {
  userCreates.createArray();
  document.getElementById("date").value="";
  document.getElementById("url").value="";
  document.getElementById("words").value="";
});
