function setGap() {
    const gapValue = document.querySelector("#gap-input").value;
    const flexBox = document.querySelector("#flex-box");
    flexBox.style.gap = `${gapValue}px`;
    console.log(`Gap set to: ${flexBox.style.gap}`);
    

}

function setJustifyContent(value) {
    const flexBox = document.querySelector("#flex-box");
    const justifyOptions = ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"];
    flexBox.style.justifyContent = justifyOptions[value - 1];
    console.log(`Justify content set to: ${flexBox.style.justifyContent}`);
   

}


function setAlignItems(value) {
    const flexBox = document.querySelector("#flex-box");
    const alignOptions = ["flex-start", "center", "flex-end", "stretch"];
    flexBox.style.alignItems = alignOptions[value - 1];  
    console.log(`Align items set to: ${flexBox.style.alignItems}`);



}

function setFlexDirection(value) {
    const flexBox = document.querySelector("#flex-box");
    flexBox.style.flexDirection = value === 1 ? "row" : "column";
    console.log(`Flex direction set to: ${flexBox.style.flexDirection}`);

}

function setFlexGrow(boxIndex) {
    const flexGrowValues = [
        document.querySelector("#grow1").value,
        document.querySelector("#grow2").value,
        document.querySelector("#grow3").value ];
    const squares = document.querySelectorAll(".square");

    squares.forEach((square, index) => {
        if (boxIndex === 0) {
            square.style.flexGrow = "0";
        } else if (boxIndex === 4) {
            square.style.flexGrow = flexGrowValues[index];
        } else if (index === boxIndex - 1) {
            square.style.flexGrow = flexGrowValues[index];
        }
    });

    squares.forEach((square, index) => {            
    console.log(`Square ${index+1} flex-grow: ${square.style.flexGrow}`);

    });
}

function resetFlexBox() {
    const flexBox = document.querySelector("#flex-box");
    flexBox.style.gap = "0";
    flexBox.style.flexDirection = "row";
    flexBox.style.justifyContent = "flex-start";
    flexBox.style.alignItems = "flex-start";
    document.querySelector("#gap-input").value = "0";
    document.querySelector("#grow1").value = "0";
    document.querySelector("#grow2").value = "0";
    document.querySelector("#grow3").value = "0";
    document.querySelectorAll(".square").forEach(square => {
        square.style.flexGrow = "0";
    });
}
