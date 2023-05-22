function showSection(sectionId) {
    const allSections = document.querySelectorAll(".section");
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

            // Set visibility of tips based on 'tipsVisible' variable
            for (let i = 0; i < tips.length; i++) {
                tips[i].style.display = tipsVisible ? "block" : "none";
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

function updateDescription(lang, tipLang = 'tips') {
    const descriptions = document.querySelectorAll('.description');
    const tips = document.querySelectorAll('.tip');

    descriptions.forEach((description) => {
        const key = description.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            description.textContent = translations[lang][key];
        }
    });

    tips.forEach((tip) => {
        const key = tip.getAttribute('data-key');
        if (translations[tipLang] && translations[tipLang][key]) {
            tip.textContent = translations[tipLang][key];
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

    updateDescription('kana', 'tips'); // Set default
});

document.getElementById('kana').addEventListener('change', function() {
    if(this.checked) {
        updateDescription('kana', 'tips');
    }
});

document.getElementById('roman').addEventListener('change', function() {
    if(this.checked) {
        updateDescription('roman', 'tips');
    }
});

document.getElementById("tips").addEventListener("change", toggleTips);

function toggleTips() {
    const tips = document.getElementsByClassName("tip");
    tipsVisible = document.getElementById("tips").checked;

    for (let i = 0; i < tips.length; i++) {
        tips[i].style.display = tipsVisible ? "block" : "none";
    }
}

// Call the function immediately after defining it
toggleTips();

const translations = {
    'kana': {
        'title': '📚 シノッ　カンピソㇱ',

        'qst_1': 'ネイタ　エオマン？',
        'opt_1a': 'リㇰ',
        'opt_1b': 'ノㇱキ',
        'opt_1c': 'ラ',

        'qst_1a': 'リㇰ　タ　ニㇱクㇽ　アン。',
        'qst_1b': 'ノㇱキ　タ　アイヌ　アン。',
        'qst_1c': 'ラ　タ　ノンノ　アン。',

        'qst_4': 'トゥタヌノ　ネイタ　エオマン？',

        'next': 'エトㇰタ　パイェアン。',
        'returnToHome': 'エ＝シノッ　オケレ　ヤ？',
        'done': 'パㇰノカ！',
        'appr': 'イヤイライケレ！',  
        'home': 'チセ　アコホシピ。',
    },
    'roman': {
        'title': '📚 Sinot Kampisos',

        'qst_1': 'neyta e=oman?',
        'opt_1a': 'rik',
        'opt_1b': 'noski',
        'opt_1c': 'ra',

        'qst_1a': 'rik ta niskur an.',
        'qst_1b': 'noski ta aynu an.',
        'qst_1c': 'ra ta nonno an.',

        'qst_4': 'tutanuno neyta e=oman?',

        'next': 'etokta paye=an.',
        'returnToHome': 'e=sinot okere ya?',
        'done': 'pakno ka!',
        'appr': 'iyayraykere!',    
        'home': 'cise a=kohosipi.',      
    },
    'tips': {
        'qst_1-tip': 'どこに行きますか？',
        'opt_1a-tip': '上',
        'opt_1b-tip': '真ん中',
        'opt_1c-tip': '下',  

        'qst_1a-tip': '上には雲があります。',
        'qst_1b-tip': '真ん中には人がいます。',
        'qst_1c-tip': '下には花があります。',

        'qst_4-tip': '次はどこに行きますか？',

        'next-tip': '先に進む',
        'returnToHome-tip': '終わりにしますか？',
        'done-tip': 'おしまい！',
        'appr-tip': 'ありがとう！',
        'home-tip': '最初に戻る',
    }
};