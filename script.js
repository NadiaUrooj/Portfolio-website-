// Website created by Nadia Urooj

// Scroll button
const scrollUpBtn = document.querySelector('.scroll-up-btn');

scrollUpBtn.addEventListener('click', () => {
   
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

scrollUpBtn.addEventListener('mouseenter', () => {
  
    scrollUpBtn.classList.add('hovered');
});

scrollUpBtn.addEventListener('mouseleave', () => {
    scrollUpBtn.classList.remove('hovered');
});



// Select the navigation items
const homeNavItem = document.querySelector('a[href="#home"]');
const portfolioNavItem = document.querySelector('a[href="#projects"]');
const resumeNavItem = document.querySelector('a[href="#about"]');

// Function to scroll to a specific section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Scroll to the home section when homeNavItem is clicked
homeNavItem.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  scrollToSection('home');
});

// Scroll to the projects section when portfolioNavItem is clicked
portfolioNavItem.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  scrollToSection('projects');
});

// Scroll to the about me section when resumeNavItem is clicked
resumeNavItem.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  scrollToSection('about');
});


function scrollToProjects() {
  const projectsSection =
    document.getElementById("portfolio");
  projectsSection.scrollIntoView({ behavior: "smooth" });
}
