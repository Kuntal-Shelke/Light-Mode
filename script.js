const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const heading = document.querySelector("#heading");
let colorMode = "light";
btn.addEventListener("click", () => {

    if (colorMode == "light") {
        body.style.color = "white";
        body.style.backgroundColor = "black";
        heading.innerText = "It's Dark Mode";
        btn.style.color = "white";
        btn.style.backgroundColor = "black";

        colorMode = "dark";

    } else {
        body.style.color = "black";
        body.style.backgroundColor = "white";
        heading.innerText = "It's Light Mode";
        btn.style.color = "black";
        btn.style.backgroundColor = "white";

        colorMode = "light";

    }
})