function testTheJS() {
    console.log('test');
}

'use strict';


function showAndHideDropNav() {

    // Buttons
    let werknemersNavItem = document.getElementById("werknemersNavItem");
    let werkgeversNavItem = document.getElementById("werkgeversNavItem");
    let gepensioneerdenNavItem = document.getElementById("gepensioneerdenNavItem");
    let onzeOrganisatieNavItem = document.getElementById("onzeOrganisatieNavItem");

    // Triggerzone
    let triggerzone = document.querySelector(".triggerzone");

    // Dropdowns
    let customDropdownWerknemers = document.getElementById("custom-dropdown-menu__werknemers");
    let customDropdownWerkgevers = document.getElementById("custom-dropdown-menu__werkgevers");
    let customDropdownGepensioneerden = document.getElementById("custom-dropdown-menu__gepensioneerden");
    let customDropdownOnzeOrganisatie = document.getElementById("custom-dropdown-menu__onze-organisatie");


    // Activate triggerZone
    function activateTriggerZone() {
        triggerzone.classList.add("show");
    };

    function showDropdown() {
        customDropdownWerknemers.classList.add("show");
    };

    function hideTriggerZone() {
        triggerzone.classList.remove("show");
    };

    werknemersNavItem.addEventListener('mouseover', function () {
        console.log(`Werknemers`);
        showDropdown();
        activateTriggerZone();
    });


    werkgeversNavItem.addEventListener('mouseover', function () {
        console.log(`Werkgevers`);
        showDropdown();
        activateTriggerZone();
    });

    gepensioneerdenNavItem.addEventListener('mouseover', function () {
        console.log(`Gepensioneerden`);
        activateTriggerZone();
    });

    onzeOrganisatieNavItem.addEventListener('mouseover', function () {
        console.log(`Onze Organisatie`);
        activateTriggerZone();
    });

}






document.addEventListener("DOMContentLoaded", function (event) {
    testTheJS();
    showAndHideDropNav();
});



