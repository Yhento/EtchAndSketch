const createGridItem = (width_of_grid_items) => {

    const grid_item = document.createElement("div");

    grid_item.className = "grid_item";

    grid_item_style = grid_item.style;

    grid_item_style.border = "1px solid black";

    
    grid_item_style.flexGrow = "1";
   

    grid_item_style.width = width_of_grid_items;

    

    return grid_item;


};

const initializeGridSquares = () => {

    var grid_squares = document.querySelectorAll(".grid_item");

    grid_squares.forEach((grid_square) => {

        grid_square.dataset.brightness = 100;

        grid_square.dataset.originalColor = "";

        let original_color = grid_square.dataset.originalColor;

    
    
    
    
         grid_square.addEventListener("mouseover", (e) => {

            const hovered_item = e.target;

            if (hovered_item.dataset.originalColor === ""){

                    new_color = getRandomColor();    

                    hovered_item.style.backgroundColor = new_color;

                    hovered_item.dataset.originalColor = new_color;

                    original_color = new_color;
             } else {

                     darkenColor(hovered_item, original_color);
             };

           
    });
});   




};

const darkenColor = (hovered_item, original_color) => {

       

        let original_color_values = original_color.match(/\d+/g)

        

        

        currentBrightness = hovered_item.dataset.brightness;

        currentBrightness -= 10;

        

        currentBrightness < 0 ? currentBrightness = 0 : currentBrightness;

        hovered_item.dataset.brightness = currentBrightness;
        console.log(currentBrightness);

        let new_color_values = original_color_values.map((color_value) => Math.floor(color_value * (currentBrightness / 100)));

        console.log(new_color_values);

        let new_color = `rgb(${new_color_values.join(", ")})`;

        console.log(new_color);

        hovered_item.style.backgroundColor = new_color;

        

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

const isNumberLessThanOrEqual100 = (value) => {
    
   var isValidNumber = !isNaN(parseInt(value)) && value <= 100 ? true : false;
   return isValidNumber;

    


};

const clearGrid = () => {

    const grid_container = document.querySelector(".grid-container");

    while (grid_container.firstChild) {
        grid_container.removeChild(grid_container.firstChild);
    }


};

const generateNewGrid = () => {

    let grid_size = prompt("Please enter the number of squares per side for the new grid!");

    

    isNumberLessThanOrEqual100(grid_size) ? (console.log("yes"),
                                            clearGrid(),
                                            createGrid(grid_size),
                                            initializeGridSquares())
                                            //Creat New Grid
                                            //Initialize Grid Squares
                                         : 

                                            generateNewGrid();





};



        



createGrid();

initializeGridSquares();





