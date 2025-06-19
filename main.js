// Index Page
const loader = document.getElementById("loader");
window.addEventListener("load", () => {
    loader.style.display = "none";
});
const head = document.getElementById("head");
head.onclick = () => {
    head.style.color = "red";
}
const paragraph = document.getElementById("head-paragraph");
paragraph.onclick = () => {
    paragraph.style.color = "#d94f4f";
}
const copyrights = document.getElementById("copyrights");
copyrights.onclick = () => {
    copyrights.style.backgroundColor = "#d94f4f";
}








