// combined
function showSection(id) {
    const sections = [
        "start-page", 
        "home", 
        "1a", 
        "1b", 
        "1c", 
        "2-1a", 
        "fin"
    ];

    for (const section of sections) {
        const element = document.getElementById(section);
        if (section === id) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}


$(document).ready(function () {
const startPage = $("#start-page");
const homeSection = $("#home");

startPage.show();
homeSection.hide();

setTimeout(function () {
    startPage.fadeOut(1000, function () {
    homeSection.fadeIn(1000);
    });
}, 3000);
});

  