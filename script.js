// span id="ter" class="fa
const tempLoad = () => {
    let ter = document.getElementById("ter");
    ter.innerHTML = "";
    ter.style.color = "green";

    setTimeout(() => {
        ter.innerHTML = "";
        ter.style.color = "pink";
    }, 1000);
    setTimeout(() => {
        ter.style.color = "yellow";
        ter.innerHTML = "";
    }, 2000);
    setTimeout(() => {
        ter.style.color = "blue";
        ter.innerHTML = "";
    }, 3000);
    setTimeout(() => {
        ter.style.color = "red";
        ter.innerHTML = "";
    }, 4000);
}
tempLoad();
setInterval (tempLoad,5000);