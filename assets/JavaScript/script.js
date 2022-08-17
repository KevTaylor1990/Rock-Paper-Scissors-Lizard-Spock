document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type"))  {
                let icon = this.getAttribute("data-type");
                alert(`You clicked ${icon}`);
            }
        });
    }

});

function userChoice() {
    let icon = 
}

function computerChoice() {

    const randomNumber = Math.floor(Math.random() * 5)
    console.log
}