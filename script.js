// Kliknutie na prvý odkaz
var link = document.querySelector('a.quickbar_link[data-hash="8e86021609dd9b4fada959885bf76bc1"]');
if (link) {
    link.click();
}

// Čakanie 2 sekundy
setTimeout(function() {
    (function() {
        'use strict';

        // Funkcia na kliknutie na tlačidlo
        function clickButton() {
            var button = document.getElementById("building"); // Nájde tlačidlo podľa ID
            if (button != null) { // Ak tlačidlo existuje
                button.click(); // Klikne na tlačidlo
            }
        }

        // Spustenie klikania každých 200ms
        setInterval(clickButton, 200);
    })();
}, 2000);
