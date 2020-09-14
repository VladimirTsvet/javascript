function solve (n) {
    n = Number(n);
    let oddSingleNumbers = 0;
    let evenNumbers = 0;
    let oodSevenNumbers = 0;
    let numbersDividors = 0;

    for (i = 1; i <= n; i++) {
        if (i < 10 && i % 2 === 1) {
            oddSingleNumbers++;
        }
        if (i % 2 ===0) {
            evenNumbers++;
        }
        if (i % 2 === 1 && i % 10 === 7) {
            oodSevenNumbers++;
        }
        if (100 % i === 0) {
            numbersDividors++;
        }
    }
    let firstPercent = oddSingleNumbers / n * 100;
    let secondPercent = evenNumbers / n * 100;
    let thirdPercent = oodSevenNumbers / n * 100;
    let forthPercent = numbersDividors / n * 100;

    console.log(`${firstPercent.toFixed(2)}%`);
    console.log(`${secondPercent.toFixed(2)}%`);
    console.log(`${thirdPercent.toFixed(2)}%`);
    console.log(`${forthPercent.toFixed(2)}%`);
}

solve (49)