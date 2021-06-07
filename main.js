'use strict';

function testTheJS() {
    console.log('test');
}



// function showAndHideDropNav() {
//     // Buttons
//     let werknemersNavItem = document.getElementById("werknemersNavItem");
//     let werkgeversNavItem = document.getElementById("werkgeversNavItem");
//     let gepensioneerdenNavItem = document.getElementById("gepensioneerdenNavItem");
//     let onzeOrganisatieNavItem = document.getElementById("onzeOrganisatieNavItem");

//     // Triggerzone
//     let triggerzone = document.querySelector(".triggerzone");

//     // Dropdowns
//     let customDropdownWerknemers = document.getElementById("custom-dropdown-menu__werknemers");
//     let customDropdownWerkgevers = document.getElementById("custom-dropdown-menu__werkgevers");
//     let customDropdownGepensioneerden = document.getElementById("custom-dropdown-menu__gepensioneerden");
//     let customDropdownOnzeOrganisatie = document.getElementById("custom-dropdown-menu__onze-organisatie");


//     let dropdownName;
//     let dropdownIsVisible = false;

//     // Activate triggerZone
//     function showTriggerZone() {
//         triggerzone.classList.add("show");
//         console.log(`showTriggerZone`);
//     };
//     function hideTriggerzone() {
//         triggerzone.classList.remove("show");
//         console.log(`hide triggerzone`);
//     }


//     function showDropdown(dropdownName) {
//         dropdownName.classList.add("show");
//         dropdownName.classList.add("animate-down");
//         console.log(`showDropdown`);
//     };

//     function closeDropdown() {
//         dropdownName.classList.remove("animate-down");
//         customDropdownWerknemers.classList.remove("show");
//         customDropdownWerkgevers.classList.remove("show");
//         customDropdownGepensioneerden.classList.remove("show");
//         customDropdownOnzeOrganisatie.classList.remove("show");
//     };

//     function switchDropdown() {
//         customDropdownWerknemers.classList.remove("show");
//         customDropdownWerkgevers.classList.remove("show");
//         customDropdownGepensioneerden.classList.remove("show");
//         customDropdownOnzeOrganisatie.classList.remove("show");
//     }


//     function firstHideAndThenShowDropdown(dropdownName) {
//         switchDropdown();
//         showDropdown(dropdownName);
//         showTriggerZone();
//     }

//     werknemersNavItem.addEventListener('mouseover', function () {
//         dropdownName = customDropdownWerknemers;
//         firstHideAndThenShowDropdown(dropdownName);
//     });

//     werkgeversNavItem.addEventListener('mouseover', function () {
//         dropdownName = customDropdownWerkgevers;
//         firstHideAndThenShowDropdown(dropdownName);
//     });


//     gepensioneerdenNavItem.addEventListener('mouseover', function () {
//         dropdownName = customDropdownGepensioneerden;
//         firstHideAndThenShowDropdown(dropdownName);
//     });


//     onzeOrganisatieNavItem.addEventListener('mouseover', function () {
//         dropdownName = customDropdownOnzeOrganisatie;
//         firstHideAndThenShowDropdown(dropdownName);
//     });


//     triggerzone.addEventListener('mouseover', function () {
//         hideTriggerzone();
//         closeDropdown();
//     });
// }


// document.addEventListener("DOMContentLoaded", function (event) {
//     testTheJS();
//     showAndHideDropNav();
// });







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
        // console.log(dropdownName.classList.contains("show"));
        // console.log(dropdownName);

        if (dropdownIsVisible) {
            dropdownName.classList.add("show");
            dropdownName.classList.remove("animate");
        } else {
            dropdownName.classList.add("animate");
        };

        // if (dropdownName.classList.contains("show") != true) {
        //     dropdownName.classList.add("animate");
        // } else if (dropdownName.classList.contains("animate")) {
        //     dropdownName.classList.remove("animate");
        //     dropdownName.classList.add("show");
        // };
    };

    function activateTriggerzone() {
        triggerzone.classList.add("show");
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

