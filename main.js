//Top
let scoops = 1;
let container = "cup";
//topppings
let hasSprinkles = true;
let hasWhip = true;
let hasFudge = true;
let hasCherry = true;

function calculate() {
    //(get values from html)
    scoops = Number(document.getElementById("scoopsInput").value);

    hasSprinkles = document.getElementById("sprinkles").checked;
    hasWhip = document.getElementById("whippedCream").checked;
    hasFudge = document.getElementById("hotFudge").checked;
    hasCherry = document.getElementById("cherry").checked;



    //result vars 
    let basePrice = 0;
    let tax = 0;
    let total = 0;
    const TAX_RATE = 0.08;

    basePrice = 1  // extra per scoop
    basePrice += scoops * 1.25 // 1.25 per scoop

    if (scoops < 1 || scoops > 4) {
        console.log("INVALID SCOOPS. VALID RANGE IS 1-4");

    } //validate the input for scoops

    if ("cup" == container) {
        if (hasSprinkles) {
            basePrice += 0.50;
        }
        if (hasWhip) {
            basePrice += 0.25;
        }
        if (hasFudge) {
            basePrice += 1.25;
        }
        if (hasCherry) {
            basePrice += 0.25;
        }
    }
    tax = basePrice * TAX_RATE;
    total = basePrice + tax

    console.log(basePrice)
    console.log(tax)
    console.log(total)

    //output to HTMl
    document.getElementById("basePriceOutput").innerHTML = basePrice;
    document.getElementById("taxOutput").innerHTML = tax;
    document.getElementById("totalOutput").innerHTML = total;
}

calculate();
document.getElementById("submit").addEventListener("click", calculate);