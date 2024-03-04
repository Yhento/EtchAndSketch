const createGridItem = (width_of_grid_items) => {

    const grid_item = document.createElement("div");

    grid_item.className = "grid_item";

    grid_item_style = grid_item.style;

    grid_item_style.border = "1px solid black";

    
    grid_item_style.flexGrow = "1";
   

    grid_item_style.width = width_of_grid_items;

    grid_item.dataset.brightness= 100;

    return grid_item;


};

const getRandomColor = () => {

    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1));
    var red = getRandomInt(0, 255);
    var green = getRandomInt(0, 255);
    var blue = getRandomInt(0, 255);

    var randomColor = `rgb(${red}, ${green}, ${blue})`;

    

    return randomColor;

    

}


const createGrid = (gridSize=16) => {

    const grid_container = document.querySelector(".grid-container");

    const width_of_container = grid_container.offsetWidth;

    const width_of_grid_items = `${(width_of_container / gridSize)}px`;
    
    number_of_squares = gridSize * gridSize;

    

    for (var i=1; i <= number_of_squares; i++) {

         grid_item = createGridItem(width_of_grid_items);

         grid_container.appendChild(grid_item);




                
        }; 


            


    };

        



createGrid();

var grid_squares = document.querySelectorAll(".grid_item");

grid_squares.forEach((grid_square) => {
    
    grid_square.addEventListener("mouseover", (e) => {

    const hovered_item = e.target;
       
           
    hovered_item.style.backgroundColor = getRandomColor();

           
    });
});   



