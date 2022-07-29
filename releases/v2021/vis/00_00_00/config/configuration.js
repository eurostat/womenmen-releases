window.configuration = {
        "defaultLang": "en",
        "incorrectMessagePattern": "<div>${incorrect-text-1} ${correct_answer}.<br/> ${incorrect-text-2}<a target=\"_blank\" href=\"${link}\">${text-publication-link}</a>",
        "correctMessagePattern": "<div>${correct-text-1}<br/>${correct-text-2} <a target=\"_blank\" href=\"${link}\">${text-publication-link}</a>",
        "resultMessagePattern": "<div id=\"result-page\">${result-text-1}<br/> <p class=\"score\">${result-text-score}<span id=\"points\">${points} /  ${total_questions}</span></p><p>${result-text-more} <a target=\"_blank\" href=\"${link}\">${text-publication-link}</a></p>",
        "introPagePattern": "<p>${intro-text-1}</p><p><b>${intro-text-2}</b></p> <p>${intro-text-3}</p> <p>${intro-text-4}</p><p>${intro-text-5}</p>",
        "publicationBaseLink": "../../"
    }