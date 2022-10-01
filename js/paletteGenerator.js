const NUMBER_COLORS = 4;


function genPalette() {
    let newColors = genColorsMagicAlgorithm();

    const colorPalette = document.getElementById("colorPalette");
    const colorItems = colorPalette.getElementsByClassName("color-item");

    console.assert(
        newColors.length == NUMBER_COLORS,
        "Number of new generated colors must be: " + NUMBER_COLORS
    );

    for (let i = 0; i < colorItems.length; ++i) {
        let newRGBColor = formatRBGColor(
            newColors[i][0], newColors[i][1], newColors[i][2]
        );
        colorItems[i].style.backgroundColor = newRGBColor;
    }

    renderCodeColors()
}

/*
* TODO: - Implement real algorithm, please replace this code
*/
function genColorsMagicAlgorithm() {
    let newColors = [NUMBER_COLORS];

    for(let i = 0; i < NUMBER_COLORS; ++i) {
        newColors[i] = [
            getRandomChannelColorValue(),
            getRandomChannelColorValue(),
            getRandomChannelColorValue()
        ];
    }

    return newColors;
}