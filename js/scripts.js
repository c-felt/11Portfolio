const hb = document.querySelector("#hamburgerBtn");
const pw = document.querySelector("#pageWrapper");

hb.addEventListener("click", () => {
    pw.classList.toggle('moveover');
})

//Put current year in footer
const theYear = new Date();
console.log(theYear.getFullYear());
document.querySelector('#year').textContent = theYear.getFullYear();

