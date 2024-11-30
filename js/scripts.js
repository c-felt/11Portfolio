const hb = document.querySelector("#hamburgerBtn");
const pw = document.querySelector("#pageWrapper");

hb.addEventListener("click", () => {
    pw.classList.toggle('moveover');
})

//Put current year in footer
const theYear = new Date();
console.log(theYear.getFullYear());
document.querySelector('#year').textContent = theYear.getFullYear();

// Get the button
const backToTopButton = document.getElementById("backToTop");

// Show the button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to top when the button is clicked
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll
    });
};