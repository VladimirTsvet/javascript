function solve (figure, sideA, sideB) {
    if (figure == `square`) {
        let area = sideA * sideA;
        console.log(area.toFixed(3));
    } else if (figure == `rectangle`) {
        let area = sideA * sideB;
        console.log(area.toFixed(3));        
    } else if (figure == `triangle`) {
        let area = (sideA * sideB) / 2;
        console.log(area.toFixed(3));
    } else if (figure == `circle`) {
        let area = Math.PI * sideA * sideA;
        console.log(area.toFixed(3));
        
    }
}

solve(`circle`, 6)