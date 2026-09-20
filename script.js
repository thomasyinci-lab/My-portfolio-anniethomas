// ==========================================
// 1. GITHUB API FETCH
// ==========================================
// Replace 'YOUR_GITHUB_USERNAME' with your actual GitHub username (e.g., 'annethomas')
const GITHUB_USERNAME = 'thomasyinci-lab'; 
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

const githubContainer = document.getElementById('github-container');

async function loadRepos() {
    // Only run this if we are on the projects page
    if (!githubContainer) return;

    try {
        // Show loading state
        githubContainer.innerHTML = '<p class="loading-text">Loading repositories...</p>';
        
        // Fetch data from GitHub
        const response = await fetch(API_URL);
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Clear the loading state
        githubContainer.innerHTML = '';
        
        // Check if the user has any repos
        if (data.length === 0) {
            githubContainer.innerHTML = '<p>No repositories found.</p>';
            return;
        }

        // Loop through the first 6 repos and create HTML for each
        data.slice(0, 6).forEach(repo => {
            const repoCard = document.createElement('a');
            repoCard.classList.add('repo-card');
            repoCard.href = repo.html_url;
            repoCard.target = '_blank'; // Open in new tab
            
            repoCard.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'No description provided.'}</p>
                <p style="color: var(--color-primary); font-size: 12px; margin-top: 10px;">
                    ⭐ ${repo.stargazers_count} Stars | ${repo.language || 'Plain Text'}
                </p>
            `;
            
            githubContainer.appendChild(repoCard);
        });

    } catch (error) {
        // Handle error state
        console.error('Error fetching repos:', error);
        githubContainer.innerHTML = '<p style="color: red;">Failed to load projects. Please try again later.</p>';
    }
}

// Run the GitHub fetch when the page loads
document.addEventListener('DOMContentLoaded', loadRepos);


// ==========================================
// 2. CONTACT FORM VALIDATION
// ==========================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        // Prevent the form from reloading the page
        event.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Get error message elements
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');
        
        // Get form group elements (for the red border)
        const nameGroup = document.getElementById('name').parentElement;
        const emailGroup = document.getElementById('email').parentElement;
        const messageGroup = document.getElementById('message').parentElement;
        
        let isValid = true;
        
        // Reset previous errors
        document.querySelectorAll('.form-group').forEach(group => group.classList.remove('error'));
        
        // 1. Validate Name
        if (name === '') {
            nameError.textContent = 'Please enter your name.';
            nameGroup.classList.add('error');
            isValid = false;
        }
        
        // 2. Validate Email (Using Regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            emailError.textContent = 'Please enter your email address.';
            emailGroup.classList.add('error');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            emailGroup.classList.add('error');
            isValid = false;
        }
        
        // 3. Validate Message
        if (message === '') {
            messageError.textContent = 'Please enter a message.';
            messageGroup.classList.add('error');
            isValid = false;
        }
        
        // 4. If everything is valid, show success message
        if (isValid) {
            alert('Success! Your message has been sent.');
            contactForm.reset(); // Clear the form
        }
    });
}

// ==========================================
// 4. DARK/LIGHT MODE TOGGLE
// ==========================================
const themeToggle = document.getElementById('theme-toggle');

// Check if the user has a saved preference in their browser
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

// Update the emoji to match the saved theme
if (themeToggle) {
    themeToggle.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
    
    themeToggle.addEventListener('click', () => {
        // Get the current theme
        const currentTheme = document.documentElement.getAttribute('data-theme');
        // Switch it
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Apply the new theme
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // Save it to the browser so it remembers on reload
        localStorage.setItem('theme', newTheme);
        
        // Change the emoji
        themeToggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
    });
}

// ==========================================
// 5. MOBILE HAMBURGER MENU
// ==========================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        // Toggle the 'active' class on the nav links
        navLinks.classList.toggle('active');
    });
}