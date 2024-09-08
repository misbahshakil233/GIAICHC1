// Get the buttons and sections
var toggleSkillsBtn = document.getElementById('toggleSkills');
var toggleExperienceBtn = document.getElementById('toggleExperience');
var toggleEducationBtn = document.getElementById('toggleEducation');
var skillsSection = document.getElementById('skills');
var experienceSection = document.getElementById('experience');
var educationSection = document.getElementById('education');
// Function to toggle visibility
function toggleVisibility(section) {
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
}
toggleSkillsBtn.addEventListener('click', function () { return toggleVisibility(skillsSection); });
toggleExperienceBtn.addEventListener('click', function () { return toggleVisibility(experienceSection); });
toggleEducationBtn.addEventListener('click', function () { return toggleVisibility(educationSection); });
skillsSection.style.display = 'block';
experienceSection.style.display = 'block';
educationSection.style.display = 'block';
