let grandTotal = 0;

function calculate()
{
    // Take input from screen
    let prod1 = document.getElementById("prod1").value;
    let price1 = 69.99;
    let total1 = (prod1)*(price1);

    let prod2 = document.getElementById("prod2").value;
    let price2 = 99.99;
    let total2 = (prod2)*(price2);

    let prod3 = document.getElementById("prod3").value;
    let price3 = 48.99;
    let total3 = (prod3)*(price3);

    let prod4 = document.getElementById("prod4").value;
    let price4 = 57.99;
    let total4 = (prod4)*(price4);

    let prod5 = document.getElementById("prod5").value;
    let price5 = 106.78;
    let total5 = (prod5)*(price5);

    let prod6 = document.getElementById("prod6").value;
    let price6 = 89.99;
    let total6 = (prod6)*(price6);

    let prod7 = document.getElementById("prod7").value;
    let price7 = 78.99;
    let total7 = (prod7)*(price7);

    let prod8 = document.getElementById("prod8").value;
    let price8 = 57.99;
    let total8 = (prod8)*(price8);

    let prod9 = document.getElementById("prod9").value;
    let price9 = 88.99;
    let total9 = (prod9)*(price9);

    grandTotal = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9;

    document.getElementById("grandTotal").value = grandTotal.toFixed(2);
}