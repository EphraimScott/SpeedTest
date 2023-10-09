function add(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value

    var addition = Number.parseInt(num1)+Number.parseInt(num2)
    alert(addition)
}
function subtract(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value

    var subtraction = Number.parseInt(num1)-Number.parseInt(num2)
    alert(subtraction)
}
function multiply(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value

    var multiplication = Number.parseInt(num1)*Number.parseInt(num2)
    alert(multiplication)
}
function divide(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value

    var division = Number.parseInt(num1)/Number.parseInt(num2)
    alert(division)
}
function leftover(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    
    var downtozero = num1 % num2
    alert(resto)
}
