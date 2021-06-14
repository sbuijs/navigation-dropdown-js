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


    // let dropdownName;
    let dropdownIsVisible = false;
    console.log(dropdownIsVisible);

    let dropdownName;

    function closeAllDropdowns() {
        customDropdownWerkgevers.classList.remove("show");
        customDropdownWerknemers.classList.remove("show");
        customDropdownGepensioneerden.classList.remove("show");
        customDropdownOnzeOrganisatie.classList.remove("show");
        console.log(`Close all dropdowns`);
    };

    function resetDropdowns() {
        customDropdownWerkgevers.classList.remove("show");
        customDropdownWerknemers.classList.remove("show");
        customDropdownGepensioneerden.classList.remove("show");
        customDropdownOnzeOrganisatie.classList.remove("show");
        customDropdownWerkgevers.classList.remove("animate");
        customDropdownWerknemers.classList.remove("animate");
        customDropdownGepensioneerden.classList.remove("animate");
        customDropdownOnzeOrganisatie.classList.remove("animate");
        triggerzone.classList.remove("show");
        dropdownIsVisible = false;
        console.log(`completed reset`);
    }

    function showDropdown(dropdownName) {
        if (dropdownIsVisible) {
            dropdownName.classList.add("show");
            dropdownName.classList.remove("animate");
            console.log(`showDropdown IF`);
        } else {
            dropdownName.classList.add("animate");
            console.log(`showDropdown Else`);
        };
    };

    function activateTriggerzone() {
        triggerzone.classList.add("show");
        console.log(`Activate triggerzone`);
    };

    werknemersNavItem.addEventListener('mouseover', function () {
        closeAllDropdowns();
        activateTriggerzone();
        dropdownName = customDropdownWerknemers;
        showDropdown(dropdownName);
        dropdownIsVisible = true;
    });

    werkgeversNavItem.addEventListener('mouseover', function () {
        closeAllDropdowns();
        activateTriggerzone();
        dropdownName = customDropdownWerkgevers;
        showDropdown(dropdownName);
        dropdownIsVisible = true;
    });


    gepensioneerdenNavItem.addEventListener('mouseover', function () {
        closeAllDropdowns();
        activateTriggerzone();
        dropdownName = customDropdownGepensioneerden;
        showDropdown(dropdownName);
        dropdownIsVisible = true;
    });


    onzeOrganisatieNavItem.addEventListener('mouseover', function () {
        closeAllDropdowns();
        activateTriggerzone();
        dropdownName = customDropdownOnzeOrganisatie;
        showDropdown(dropdownName);
        dropdownIsVisible = true;
    });


    triggerzone.addEventListener('mouseover', function () {
        resetDropdowns();
    });

};

document.addEventListener("DOMContentLoaded", function (event) {
    testTheJS();
    showAndHideDropNav();
});

