/****** Map ******/
var map;

var OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  minZoom: 15,
  attribution: 'Kenny Anderson and Jason Crider',
});

var magicKingdom = [28.4187304,-81.581206];

var epcot = [28.376543338787936,-81.5493893623352];

var hollywoodStudios = [28.3574015,-81.5606943555329];

var animalKingdom = [28.357567857801694,-81.5905237197876];

map = L.map("map", {
  zoom: 17,
  maxBounds: [
        //south west
        [28.321004534362544, -81.63185119628905],
        //north east
        [28.441223256828355, -81.49246215820312]
        ],
  center: magicKingdom,
  layers: [OpenStreetMap],
  zoomControl: false,
  scrollWheelZoom: true,
  attributionControl: true,
  setPrefix: false
});

map.attributionControl.setPrefix(false);

/*var ourNames = L.control.attribution({
  position: 'bottomleft',
  prefix: 'Death Tour'
}).addTo(map);*/

var ripIcon = L.icon({
              iconUrl: 'img/marker.png',
              iconSize: [25, 25],
});

var marker =

// Magic Kingdom
L.marker([28.4184, -81.57835], {
  id: "marker-1",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Raymond Barlow<br>February 14, 1999</a>").on('click', clickZoom);

L.marker([28.419311, -81.58104], {
  id: "marker-2",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Joel Goode<br>August 11, 1977</a>").on('click', clickZoom);

L.marker([28.419192, -81.577707], {
  id: "marker-3",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Maria Cruz Cancino<br>August 12, 1980</a>").on('click', clickZoom);

L.marker([28.418824, -81.577455], {
  id: "marker-4",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Pamela Lynn Haynes<br>July 2015</a>").on('click', clickZoom);

L.marker([28.418786, -81.577202], {
  id: "marker-5",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Rame Masarwa<br>August 1, 2006</a>").on('click', clickZoom);

L.marker([28.41814534415844, -81.58425807952881], {
  id: "marker-6",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>February 2005</a>").on('click', clickZoom);

L.marker([28.4182, -81.5844], {
  id: "marker-7",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Mark Priest<br>August 2009</a>").on('click', clickZoom);

L.marker([28.418962, -81.577671], {
  id: "marker-8",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>December 7, 2006</a>").on('click', clickZoom);

L.marker([28.4203, -81.5812], {
  id: "marker-9",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>December 12, 2010</a>").on('click', clickZoom);

L.marker([28.420490, -81.582037], {
  id: "marker-10",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>December 25, 2014</a>").on('click', clickZoom);

L.marker([28.419216323469705, -81.58459067344666], {
  id: "marker-11",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>November 5, 2000</a>").on('click', clickZoom);

L.marker([28.4181, -81.5834], {
  id: "marker-12",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Katherine Jo-Ann Baliton<br>April 7, 2012</a>").on('click', clickZoom);

L.marker([28.418079292216312, -81.58594787120819], {
  id: "marker-13",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Javier Cruz<br>February 11, 2004</a>").on('click', clickZoom);

L.marker([28.420197651830208, -81.58431708812714], {
  id: "marker-14",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>February 2017</a>").on('click', clickZoom);

// Epcot
L.marker([28.374093710002718,-81.54736161231995], {
  id: "marker-15",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Daudi Bamuwamye<br>June 13 2015</a>").on('click', clickZoom);

L.marker([28.373966271119055,-81.54736161231995], {
  id: "marker-16",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Hiltrud Bleumel<br>April 2006</a>").on('click', clickZoom);

L.marker([28.37384355204938,-81.54732406139374], {
  id: "marker-17",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>June 13, 2005</a>").on('click', clickZoom);

L.marker([28.373782192461302,-81.54722750186919], {
  id: "marker-18",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>April 11, 2006</a>").on('click', clickZoom);

L.marker([28.373069474645536,-81.55112206935883], {
  id: "marker-19",
  //Suicide discussed in Inside the Mouse
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Allan Ferris<br>September 12, 1992</a>").on('click', clickZoom);

L.marker([28.37393795134636, -81.5513151884079], {
  id: "marker-20",
  //Soarin'
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>John Parietti<br>January 15, 2007</a>").on('click', clickZoom);

L.marker([28.374551544729144,-81.54723823070526], {
  id: "marker-21",
  //Body Wars, part of Wonders of Life no longer extant
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>May 16, 1995</a>").on('click', clickZoom);

L.marker([28.37858229301675,-81.55077338218688], {
  id: "marker-22",
  //parking lot
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Dorine Newell<br>November 21, 1984</a>").on('click', clickZoom);

L.marker([28.380224755418006,-81.54563426971436], {
  id: "marker-23",
  //parking lot
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Gary Newell<br>November 21, 1984</a>").on('click', clickZoom);

L.marker([28.378176393216357,-81.54649257659912], {
  id: "marker-24",
  //parking lot
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Stephanie Newell<br>November 21, 1984</a>").on('click', clickZoom);

L.marker([28.38050793601977,-81.55104160308838], {
  id: "marker-25",
  //parking lot
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>January 14, 1986</a>").on('click', clickZoom);

L.marker([28.380592890052874,-81.54806971549988], {
  id: "marker-26",
  //parking lot
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>January 14, 1986</a>").on('click', clickZoom);

L.marker([28.355627636102188,-81.55909359455107], {
  id: "marker-27",
  //star tours
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Ralph Lyles<br>September 2016</a>").on('click', clickZoom);

L.marker([28.356699247118353,-81.5587717294693], {
  id: "marker-28",
  //indiana jones
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Anislav Varbanov<br>August 2009</a>").on('click', clickZoom);

L.marker([28.35818154584766,-81.55896484851837], {
  id: "marker-29",
  //unknown employee/location?
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>February 8, 1990</a>").on('click', clickZoom);

L.marker([28.35938530824809,-81.56059563159943], {
  id: "marker-30",
  //rocknroller coaster
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>June 29, 2006</a>").on('click', clickZoom);

L.marker([28.356477372597688,-81.56101942062378], {
  id: "marker-31",
  //toy story
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>October 2014</a>").on('click', clickZoom);

L.marker([28.35651041776846,-81.58783614635466], {
  id: "marker-32",
  //whirl
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Karen Price<br>November 2007</a>").on('click', clickZoom);

L.marker([28.356453768897985,-81.58795952796936], {
  id: "marker-33",
  //whirl
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Russell Sherry Roscoe<br>March 14, 2011</a>").on('click', clickZoom);

L.marker([28.355599311435203,-81.58849060535431], {
  id: "marker-34",
  //dinosaur
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>April 30, 2005</a>").on('click', clickZoom);

L.marker([28.358172104519987,-81.58721923828125], {
  id: "marker-35",
  //everest
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Jeffery Reeb<br>December 18, 2007</a>").on('click', clickZoom);

L.marker([28.35105782542442,-81.57498300075531], {
  id: "marker-36",
  //downhill double dipper
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Oscar Wicker Jr.<br>March 16, 2007</a>").on('click', clickZoom);

L.marker([28.366102523850532,-81.53036713600157], {
  id: "marker-37",
  //wave pool
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Jerra Kirby<br>August 4, 2005</a>").on('click', clickZoom);

L.marker([28.36594675346225,-81.53042078018188], {
  id: "marker-38",
  //wave pool
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>August 26, 2012</a>").on('click', clickZoom);

L.marker([28.41149276310289,-81.5646082162857], {
  id: "marker-39",
  //river country
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Chase Brubaker<br>April 1, 2010</a>").on('click', clickZoom);

L.marker([28.411256848300972,-81.56455993652344], {
  id: "marker-40",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>August 22, 1980</a>").on('click', clickZoom);

L.marker([28.41133234109476,-81.5648227930069], {
  id: "marker-41",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>April 16, 1982</a>").on('click', clickZoom);

L.marker([28.410917130063112,-81.56458139419556], {
  id: "marker-42",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>August 9, 1982</a>").on('click', clickZoom);

L.marker([28.4110775527001,-81.56475841999054], {
  id: "marker-43",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>July 10, 1989</a>").on('click', clickZoom);

L.marker([28.405594735421133,-81.55718386173248], {
  id: "marker-44",
  //fort wilderness pool
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>May 23, 1987</a>").on('click', clickZoom);

L.marker([28.410435860694257,-81.58691346645355], {
  id: "marker-45",
  //lane graves
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Lane Graves<br>June 14, 2016</a>").on('click', clickZoom);

L.marker([28.411606002021156,-81.58354997634888], {
  id: "marker-46",
  //seven seas lagoon
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown Name<br>October 9, 1989</a>").on('click', clickZoom);

L.marker([28.414875723565174,-81.57429099082947], {
  id: "marker-47",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>March 22, 2016</a>").on('click', clickZoom);

L.marker([28.387540011741013,-81.53945446014404], {
  id: "marker-48",
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>December 26, 2010</a>").on('click', clickZoom);

L.marker([28.35046770123537,-81.54387474060059], {
  id: "marker-49",
  //pop century pool
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>March 10, 2013</a>").on('click', clickZoom);

L.marker([28.350278860802213,-81.54784440994263], {
  id: "marker-50",
  //art of animation pool
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>July 14, 2015</a>").on('click', clickZoom);

L.marker([28.337776877200927,-81.55679225921631], {
  id: "marker-51",
  //espn
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Steven Snyder<br>July 9, 2010</a>").on('click', clickZoom);

L.marker([28.395675871708576,-81.57624363899231], {
  id: "marker-52",
  //speedway
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Gary Terry<br>April 12, 2015</a>").on('click', clickZoom);

L.marker([28.379049547840363,-81.50643110275269], {
  id: "marker-53",
  //doubletree
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Unknown<br>June 13, 2010</a>").on('click', clickZoom);

L.marker([28.405533394207854,-81.58537924289702], {
  id: "marker-54",
  //coral island coffee
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Nicole Cotto<br>April 6, 1982</a>").on('click', clickZoom);

L.marker([28.41577216638465,-81.57565355300903], {
  id: "marker-55",
  //parking lot tram
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Cassandra Lusinski<br>June 12, 1982</a>").on('click', clickZoom);

L.marker([28.40573629193161,-81.57952129840851], {
  id: "marker-56",
  //monorail
  icon: ripIcon
}).addTo(map).bindPopup("<a class='popup'>Austin Wuennenberg<br>July 5, 2009</a>").on('click', clickZoom);


function clickZoom(e) {
	map.setView(e.target.getLatLng(),19);
}

/**** Attribution and Control Buttons ****/

/*L.easyButton({
  position: 'topright',
  id:'about-button',
  leafletClasses: true,
  states:[{
    title: 'Instructions',
    onClick: function(button, map){
      $('#about').modal('show');
    },
    icon: '<i class="mdi mdi-help mdi-18px"></i>'
  }]
}).addTo(map);*/

var magicTab = L.easyButton({
  position: 'topright',
  id:'magic-tab',
  leafletClasses: true,
  states:[{
    title: 'Magic Kingdom',
    onClick: function(button, map){
      map.setView(magicKingdom, 16);
    },
    icon: '<i class="mdi mdi-auto-fix mdi-18px"></i>'
  }]
}).addTo(map);

var epcotTab = L.easyButton({
  position: 'topright',
  id:'epcot-tab',
  leafletClasses: true,
  states:[{
    title: 'Epcot',
    onClick: function(button, map){
      map.setView(epcot, 16);
    },
    icon: '<i class="mdi mdi-web mdi-18px"></i>'
  }]
}).addTo(map);

var hollywoodTab = L.easyButton({
  position: 'topright',
  id:'hollywood-tab',
  leafletClasses: true,
  states:[{
    title: 'Hollywood Studios',
    onClick: function(button, map){
      map.setView(hollywoodStudios, 16);
    },
    icon: '<i class="mdi mdi-movie mdi-18px"></i>'
  }]
}).addTo(map);

var animalTab = L.easyButton({
  position: 'topright',
  id:'animal-tab',
  leafletClasses: true,
  states:[{
    title: 'Animal Kingdom',
    onClick: function(button, map){
      map.setView(animalKingdom, 16);
    },
    icon: '<i class="mdi mdi-paw mdi-18px"></i>'
  }]
}).addTo(map);

var zoomControl = L.control.zoom({
  position: "topright"
}).addTo(map);

var jsonStyle = {
    "color": "#333",
    "weight": 0,
    "opacity": 1.0,
    "fill": true,
    "fillColor": "#333",
    "fillOpacity": 0.7
};

L.geoJSON(florida, {
  style: jsonStyle
}).addTo(map);
