let string = "";
let button = document.querySelectorAll(".btn");
Array.from(button.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerText == "=") {
            string = eval(string);
            input.value = string;
        }
        else{
            if (e.target.innerText == "Reset"){
                string = "";
                input.value = string;
            }
        }
        string = string + e.target.value;
        input.value = string;
        
    })
}))
