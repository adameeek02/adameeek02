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
