"use strict";
const showDropdown = document.querySelector(".show")
const hideDropdown = document.querySelector(".hide")
const dropdown = document.querySelector(".dropdown")

showDropdown.addEventListener('click', function(){
    // hide the hamburger icon
    showDropdown.style.display = "none"
    // show the cancel icon
    hideDropdown.style.display = "inline-block"
    // display dropdown
    dropdown.style.marginTop = "0"
})
hideDropdown.addEventListener('click', function(){
    // Show the hamburger icon
    showDropdown.style.display = "inline-block"
    // Hide the cancel icon
    hideDropdown.style.display = "none"
    // hide the dropdown
    dropdown.style.marginTop = '-550px'
});
