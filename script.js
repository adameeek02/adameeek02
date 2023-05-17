(function() {
    'use strict';

    // Funkcia, ktorá pridá podpis k správe a odosle ju
    function pridatPodpisAOdoslat() {
        var textArea = document.getElementById("message");
        var text = textArea.value;
        text += "\n\n[i]zracca[/i]";
        textArea.value = text;
        var buttons = document.querySelectorAll('input[type="submit"]');
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].value === "Odpovedať" || buttons[i].value === "Odoslať") {
                buttons[i].click();
            }
        }
    }

    // Nastavenie tlačidla na pridanie podpisu a odoslanie správy
    var button = document.createElement("button");
    button.innerHTML = "Pridať podpis a odoslať";
    button.style.marginTop = "10px";
    button.addEventListener("click", pridatPodpisAOdoslat);

    // Pridanie tlačidla pod textové pole
    var textAreaContainer = document.querySelector(".easy-submit").parentNode;
    textAreaContainer.appendChild(button);
})();
