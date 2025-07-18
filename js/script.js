// JavaScript for RWD Layout Test

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeDropdownMenu();
    initializeMobileMenu();
    initializeFormHandler();
});

// Initialize desktop dropdown menu
function initializeDropdownMenu() {
    const menuButton = document.getElementById('menuButton');
    const dropdown = document.getElementById('dropdown');
    
    if (menuButton && dropdown) {
        menuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuButton.contains(event.target) && !dropdown.contains(event.target)) {
                dropdown.classList.add('hidden');
            }
        });
    }
}

// Initialize mobile menu
function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Initialize form handler
function initializeFormHandler() {
    const submitButton = document.getElementById('submitButton');
    const textInput = document.getElementById('textInput');
    
    if (submitButton && textInput) {
        submitButton.addEventListener('click', function() {
            const inputValue = textInput.value.trim();
            
            if (inputValue) {
                alert(`You entered: ${inputValue}`);
                textInput.value = ''; // Clear the input
            } else {
                alert('Please enter some text first!');
            }
        });
        
        // Handle Enter key in input field
        textInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                submitButton.click();
            }
        });
    }
}

// Utility function to handle responsive behavior
function handleResize() {
    // Add any resize-specific logic here
    console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
}

// Add resize event listener
window.addEventListener('resize', handleResize);