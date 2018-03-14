/***** Sidebar *****/
$("#sidebar-toggle-btn").click(function() {
  sidebarOpen();
  return false;
});

function sidebarOpen() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("sidebar-backdrop").style.display = "block";
    return false;
}

$("#sidebar-backdrop").click(function() {
  sidebarClose();
  return false;
});

function sidebarClose() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar-backdrop").style.display = "none";
    return false;
}

$("#sidebar-toggle-btn").click(function() {
    var $nodes = $("#Items").find("li");
    shuffle($nodes, "sw");
    $("#Items").append($nodes);
    return false;
});


//Function that will shuffle only your switchable elements.
function shuffle(nodes, switchableSelector) {
    var length = nodes.length;

    //Create the array for the random pick.
    var switchable = nodes.filter("." + switchableSelector);
    var switchIndex = [];

    $.each(switchable, function(index, item) {
       switchIndex[index] = $(item).index();
    });

    //The array should be used for picking up random elements.
    var switchLength = switchIndex.length;
    var randomPick, randomSwap;

    for (var index = length; index > 0; index--) {
        //Get a random index that contains a switchable element.
        randomPick = switchIndex[Math.floor(Math.random() * switchLength)];

        //Get the next element that needs to be swapped.
        randomSwap = nodes[index - 1];

        //If the element is 'not switchable', ignore and continue;
        if($(randomSwap).hasClass(switchableSelector)) {
            nodes[index - 1] = nodes[randomPick];
            nodes[randomPick] = randomSwap;
        }
    }

    return nodes;
}

/*var cards = $(".random-section");
for(var i = 0; i < cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) + 1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.eq(target).before(cards.eq(target2));
}*/
