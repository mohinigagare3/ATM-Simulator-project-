let balance = 10000;
const correctpin ="1234";

function login(){
    let pin = document.getElementById("pin").Value;
    if(pin ===correctpin){
        document.getElementById("login").style.display ="none";
        document.getElementById("menu").style.displa = "block";
        document.getElementById("output").innerTextn="Login Successful";
    } else{
        alert("Incorrect PIN")
    }
}
function checkBalance(){
     document.getElementById("output").innerText = "yo balance is ruppes"+balance;
}
function deposite() {
    let amount = prompt("Enter amount to deposite:")
    if (amount > 0){
        balance += Number(amount);

        document.getElementById("output").innerText = "ruppes" + amount +"deposited successfully.";

    } else{
        alert("Invalid amount");

    }
}

function withdraw() {
    let amount = prompt("Enter amount to withdraw:");

    if (amount > balance){
        alert("Insufficient balance");
    } else if (amount > 0){
        balance -= Number(amount);
        document.getElementById("output").innerText ="ruppes" + amount +"withdrawn successfully.";

    } else {
        alert("Invalid amount");
    }
}
    function logout(){
        location.reload();
    }