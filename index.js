
// Question 1 function
function GreaterNum() {
    let value1 = document.getElementById("greater_input").value;
    let value2 = document.getElementById("greater_input_2").value;

    if (value1 == "" && value2 == "") {
        alert("Enter Something");
        return false;
    }

    if (Number(value1) > Number(value2)) {
        alert(Number(value1) + " is grater");
    } else {
        alert(Number(value2) + " is grater");
    }
}



//Question 2 function
function leap_year() {
    let value1 = document.getElementById("leap_input").value;

    if (value1 == "") {
        alert("Enter Something");
        return false;
    }

    if ((0 == value1 % 4) && (0 != value1 % 100) || (0 == value1 % 400)) {
        alert(value1 + " is a leap year");
    } else {
        alert(value1 + " not a leap year");
    }
}




// Question 3 function
function Cal_Per() {
    let sub1 = document.getElementById("s1").value;
    let sub2 = document.getElementById("s2").value;
    let sub3 = document.getElementById("s3").value;
    let sub4 = document.getElementById("s4").value;
    let sub5 = document.getElementById("s5").value;

    if (sub1 > 100 || sub1 < 0 || sub2 > 100 || sub2 < 0 || sub3 > 100 || sub4 < 0 || sub5 > 100 || sub5 < 0) {
        alert("Please enter valid data");
        return false;
    }

    if (sub1, sub2, sub3, sub4, sub5 == "") {
        alert("Enter Something");
        return false;
    }



    let Percentage = (Number(sub1) + Number(sub2) + Number(sub3) + Number(sub4) + Number(sub5)) / 500 * 100;
    alert("Your Percentage is " + Math.floor(Percentage) + "%");
}



// Question 4 function
function checkPositiveNegative() {
    let num = document.getElementById("n1").value;

    if (num == "") {
        alert("Enter Something");
        return false;
    }

    if (num > 0) {
        alert("Positive");
    } else {
        alert("negative");
    }

}


//  Question 5 function
function greaterThreeNumber() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;

    console.log(typeof (num1));

    if (Number(num1) >= Number(num2) && Number(num1) >= Number(num3)) {
        alert(Number(num1) + " is greater number");
    } else if (Number(num2) >= Number(num1) && Number(num2) >= Number(num3)) {
        alert(Number(num2) + " is greater number");
    } else {
        alert(Number(num3) + " is greater number");
    }
}

