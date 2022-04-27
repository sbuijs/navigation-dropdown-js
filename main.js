'use strict';


function showAndHideDropNav() {
    // variables of the navigation buttons
    let werknemersNavItem = document.getElementById("werknemersNavItem");
    let werkgeversNavItem = document.getElementById("werkgeversNavItem");
    let gepensioneerdenNavItem = document.getElementById("gepensioneerdenNavItem");
    let onzeOrganisatieNavItem = document.getElementById("onzeOrganisatieNavItem");

    // varible of the trigger zone that helps with closing the dropdowns
    let triggerzone = document.querySelector(".triggerzone");

    // variables of the dropdowns
    let customDropdownWerknemers = document.getElementById("custom-dropdown-menu__werknemers");
    let customDropdownWerkgevers = document.getElementById("custom-dropdown-menu__werkgevers");
    let customDropdownGepensioneerden = document.getElementById("custom-dropdown-menu__gepensioneerden");
    let customDropdownOnzeOrganisatie = document.getElementById("custom-dropdown-menu__onze-organisatie");

    //variable of the state of the dropdown
    let isDropdownVisible = false;

    //variable that holds the name of the current dropdown
    let dropdownName;


    //function that removes all show classes for all the custom dropdowns
    function removeAllShowClasses() {
        customDropdownWerknemers.classList.remove("show");
        customDropdownWerkgevers.classList.remove("show");
        customDropdownGepensioneerden.classList.remove("show");
        customDropdownOnzeOrganisatie.classList.remove("show");
        console.log(`Removed the show class`);
    };


    //Function that animates the dropdown up by replacing the animate-down with the animate up class
    function animateUp() {
        customDropdownWerknemers.classList.remove("animate-down");
        customDropdownWerkgevers.classList.remove("animate-down");
        customDropdownGepensioneerden.classList.remove("animate-down");
        customDropdownOnzeOrganisatie.classList.remove("animate-down");
        customDropdownWerknemers.classList.add("animate-up");
        customDropdownWerkgevers.classList.add("animate-up");
        customDropdownGepensioneerden.classList.add("animate-up");
        customDropdownOnzeOrganisatie.classList.add("animate-up");
    }


    // function that removes all the animate-up and animate-down classes
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
        animateUp();
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

    //function that adds a triggerzone underneath the dropdown that functions as a hover-to-close-dropdown-area
    function activateTriggerzone() {
        triggerzone.classList.add("show");
        console.log(`Activate triggerzone`);
    };

    //Function that calls all the functions that are needed to show the dropdown and animate if necessary
    function showTheDropdown(dropdownName) {
        removeAllAnimateClasses();
        removeAllShowClasses();
        activateTriggerzone();
        showDropdown(dropdownName);
        isDropdownVisible = true;
    };

    //when the user hovers an item the showdropdown function is called
    werknemersNavItem.addEventListener('mouseover', function () {
        dropdownName = customDropdownWerknemers;
        showTheDropdown(dropdownName);
    });

    werkgeversNavItem.addEventListener('mouseover', function () {
        dropdownName = customDropdownWerkgevers;
        showTheDropdown(dropdownName);
    });


    gepensioneerdenNavItem.addEventListener('mouseover', function () {
        dropdownName = customDropdownGepensioneerden;
        showTheDropdown(dropdownName);
    });


    onzeOrganisatieNavItem.addEventListener('mouseover', function () {
        dropdownName = customDropdownOnzeOrganisatie;
        showTheDropdown(dropdownName);
    });


    //when the user hovers over the trigger zone it will reset all the dropdowns and animate it to closed state
    triggerzone.addEventListener('mouseover', function () {
        resetDropdowns();
        console.log(`triggerzone hit`);
    });

};


document.addEventListener("DOMContentLoaded", function () {
    showAndHideDropNav();
});

