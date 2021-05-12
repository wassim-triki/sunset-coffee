const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const navList = document.getElementById("nav-items");

btnOpen.addEventListener("click", () => {
  navList.style.top = "0";
});

btnClose.addEventListener("click", () => {
  navList.style.top = "-800px";
});
