let btn = document.getElementById("btn");
let output = document.getElementById("output");

btn.addEventListener('click', function(){
    let str = document.getElementById("age").value;
    output.innerHTML = current.getFullYear() - str ;
});