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

    let isDropdownVisible = false;
    let dropdownName;


    //function removes all show classes
    function removeAllShowClasses() {
        customDropdownWerknemers.classList.remove("show");
        customDropdownWerkgevers.classList.remove("show");
        customDropdownGepensioneerden.classList.remove("show");
        customDropdownOnzeOrganisatie.classList.remove("show");
        console.log(`Removed the show class`);
    };



    function animateup() {
        customDropdownWerknemers.classList.remove("animate-down");
        customDropdownWerkgevers.classList.remove("animate-down");
        customDropdownGepensioneerden.classList.remove("animate-down");
        customDropdownOnzeOrganisatie.classList.remove("animate-down");
        customDropdownWerknemers.classList.add("animate-up");
        customDropdownWerkgevers.classList.add("animate-up");
        customDropdownGepensioneerden.classList.add("animate-up");
        customDropdownOnzeOrganisatie.classList.add("animate-up");
    }
    //function removes all animate classes
    function animateDown() {
        customDropdownWerknemers.classList.add("animate-down");
        customDropdownWerkgevers.classList.add("animate-down");
        customDropdownGepensioneerden.classList.add("animate-down");
        customDropdownOnzeOrganisatie.classList.add("animate-down");
    };


    function removeAllAnimateClasses() {
        customDropdownWerknemers.classList.remove("animate-up");
        customDropdownWerkgevers.classList.remove("animate-up");
        customDropdownGepensioneerden.classList.remove("animate-up");
        customDropdownOnzeOrganisatie.classList.remove("animate-up");
        customDropdownWerknemers.classList.remove("animate-down");
        customDropdownWerkgevers.classList.remove("animate-down");
        customDropdownGepensioneerden.classList.remove("animate-down");
        customDropdownOnzeOrganisatie.classList.remove("animate-down");
    };

    //function removes all show and animate classes and removes show class on triggerzone and sets dropdown is visible to false
    function resetDropdowns() {
        removeAllShowClasses();
        removeAllAnimateClasses();
        animateup();
        triggerzone.classList.remove("show");
        isDropdownVisible = false;
    };

    //Shows the dropdown and only animates it if there is no dropdown visible
    function showDropdown(dropdownName) {
        if (isDropdownVisible) {
            dropdownName.classList.add("show");
            dropdownName.classList.remove("animate-down");
            dropdownName.classList.remove("animate-up");
        } else {
            dropdownName.classList.add("show");
            dropdownName.classList.add("animate-down");
        };
    };

    function activateTriggerzone() {
        triggerzone.classList.add("show");
        console.log(`Activate triggerzone`);
    };


    function doYourThing(dropdownName) {
        removeAllAnimateClasses();
        removeAllShowClasses();
        activateTriggerzone();
        showDropdown(dropdownName);
        isDropdownVisible = true;
    }


    werknemersNavItem.addEventListener('mouseover', function () {
        dropdownName = customDropdownWerknemers;
        doYourThing(dropdownName);
    });

    werkgeversNavItem.addEventListener('mouseover', function () {
        dropdownName = customDropdownWerkgevers;
        doYourThing(dropdownName);
    });


    gepensioneerdenNavItem.addEventListener('mouseover', function () {
        dropdownName = customDropdownGepensioneerden;
        doYourThing(dropdownName);
    });


    onzeOrganisatieNavItem.addEventListener('mouseover', function () {
        dropdownName = customDropdownOnzeOrganisatie;
        doYourThing(dropdownName);
    });


    triggerzone.addEventListener('mouseover', function () {
        resetDropdowns();
        console.log(`triggerzone hit`);
    });

};


document.addEventListener("DOMContentLoaded", function () {
    showAndHideDropNav();
});

