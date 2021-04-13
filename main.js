// Function that builds a grid in the "container"
function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $(".container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(620/x);
    $(".grid").height(600/x);
};

// Function that clears the grid
function clearGrid(){
    $(".grid").remove();
};

function restartGrid(){
    $(".grid").css("background-color", "white");
}

// Function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
};

// Create a 16x16 grid when the page loads.
// Creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function() {
    createGrid(16);
    var colors = ['blue','green','red','purple','yellow', 'gray'];

    $(".grid").mouseover(function() {
        var rand = colors[Math.floor(Math.random() * colors.length)];
        $(this).css("background-color", rand);
        });

    $(".newGridBtn").click(function() {
        refreshGrid();

        $(".grid").mouseover(function() {
        var rand = colors[Math.floor(Math.random() * colors.length)];
        $(this).css("background-color", rand);
        });
    });
});