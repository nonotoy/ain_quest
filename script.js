function showSection(sectionId) {
    const allSections = document.querySelectorAll("[id^='start-page'], [id^='home'], [id^='1'], [id^='2'],[id^='fin']");
    const controls = document.getElementById("controls");
    const tips = document.querySelectorAll('.tip');

    for (const section of allSections) {
        if (section.id === sectionId) {
            section.style.display = "block";
            if (sectionId === "start-page") {
                controls.classList.add("hidden");
            } else {
                controls.classList.remove("hidden");
            }

            // Default - No translation shown when open a page initially
            for (let i = 0; i < tips.length; i++) {
                tips[i].style.display = "none";
            }

        } else {
            section.style.display = "none";
        }
    }
}

$(document).ready(function () {
    const startPage = $("#start-page");
    const homeSection = $("#home");
    const controls = $("#controls");

    startPage.show();
    homeSection.hide();
    controls.hide(); 

    setTimeout(function () {
        startPage.fadeOut(1000, function () {
            homeSection.fadeIn(1000);
            controls.fadeIn(1000);
        });
    }, 100); // Default 3000

    showSection("start-page");
});

function updateDescription(lang) {
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach((description) => {
        const key = description.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            description.textContent = translations[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const languageButtons = document.getElementsByName('character');
    languageButtons.forEach((button) => {
        button.addEventListener('change', (event) => {
            updateDescription(event.target.value);
        });
    });

    updateDescription('kana'); // Set default
});

document.getElementById("tips").addEventListener("change", toggleTips);

function toggleTips() {
    const tips = document.getElementsByClassName("tip");
    const isChecked = document.getElementById("tips").checked;

    for (let i = 0; i < tips.length; i++) {
        tips[i].style.display = isChecked ? "block" : "none";
    }

}
