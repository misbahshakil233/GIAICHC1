// Get the buttons and sections
const toggleSkillsBtn = document.getElementById('toggleSkills') as HTMLButtonElement;
const toggleExperienceBtn = document.getElementById('toggleExperience') as HTMLButtonElement;
const toggleEducationBtn = document.getElementById('toggleEducation') as HTMLButtonElement;

const skillsSection = document.getElementById('skills') as HTMLElement;
const experienceSection = document.getElementById('experience') as HTMLElement;
const educationSection = document.getElementById('education') as HTMLElement;

// Function to toggle visibility
function toggleVisibility(section: HTMLElement) {
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
}


toggleSkillsBtn.addEventListener('click', () => toggleVisibility(skillsSection));
toggleExperienceBtn.addEventListener('click', () => toggleVisibility(experienceSection));
toggleEducationBtn.addEventListener('click', () => toggleVisibility(educationSection));


skillsSection.style.display = 'block';
experienceSection.style.display = 'block';
educationSection.style.display = 'block';
