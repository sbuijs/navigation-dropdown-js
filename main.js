'use strict';

function testTheJS() {
    console.log('test');
}



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


    let dropdownName;


    // Activate triggerZone
    function activateTriggerZone() {
        triggerzone.classList.add("show");
        console.log(`show triggerzone`);
    };

    function showDropdown(dropdownName, dropdownIsVisible) {
        dropdownName.classList.add("show");
        dropdownName.classList.add("animate");
        console.log(`dropdownIsVisible`);
    };

    function hideDropdown() {
        customDropdownWerknemers.classList.remove("show");
        customDropdownWerkgevers.classList.remove("show");
        customDropdownGepensioneerden.classList.remove("show");
        customDropdownOnzeOrganisatie.classList.remove("show");
    };

    function hideTriggerzone() {
        triggerzone.classList.remove("show");
        console.log(`hide triggerzone`);
    }

    function firstHideAndThenShowDropdown(dropdownName) {
        // hideDropdown();
        showDropdown(dropdownName);
        activateTriggerZone();

    }

    werknemersNavItem.addEventListener('mouseover', function () {
        dropdownName = customDropdownWerknemers;
        firstHideAndThenShowDropdown(dropdownName);
    });

    werkgeversNavItem.addEventListener('mouseover', function () {
        dropdownName = customDropdownWerkgevers;
        firstHideAndThenShowDropdown(dropdownName);
    });


    gepensioneerdenNavItem.addEventListener('mouseover', function () {
        dropdownName = customDropdownGepensioneerden;
        firstHideAndThenShowDropdown(dropdownName);
    });


    onzeOrganisatieNavItem.addEventListener('mouseover', function () {
        dropdownName = customDropdownOnzeOrganisatie;
        firstHideAndThenShowDropdown(dropdownName);
    });


    triggerzone.addEventListener('mouseover', function () {
        hideTriggerzone();
        hideDropdown();
    });
}


document.addEventListener("DOMContentLoaded", function (event) {
    testTheJS();
    showAndHideDropNav();
});



