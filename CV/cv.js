document.addEventListener('DOMContentLoaded', () => {
    const cvContainer = document.getElementById('cvContainer');
  
    // Define the CV class
    class CV {
      constructor(csvFilePath) {
        this.fullName = '';
        this.phoneNumber = '';
        this.emailAddress = '';
        this.objective = '';
        this.education = [];
        this.workExperience = [];
        this.skills = [];
        this.achievements = [];
        this.projects = [];
  
        // Read the CSV file
        fetch(csvFilePath)
          .then(response => response.text())
          .then(csvData => {
            // Process each line of the CSV file
            const lines = csvData.split('\n');
            for (let i = 0; i < lines.length; i++) {
              const line = lines[i].trim();
              if (line !== '') {
                const values = line.split(',');
  
                // Extract the relevant information and populate the CV members
                switch (values[0]) {
                  case 'Full Name':
                    this.fullName = values[1];
                    break;
                  case 'Phone Number':
                    this.phoneNumber = values[1];
                    break;
                  case 'Email Address':
                    this.emailAddress = values[1];
                    break;
                  case 'Objective':
                    this.objective = values[1];
                    break;
                  case 'Education':
                    this.education.push({
                      institution: values[1],
                      degree: values[2],
                      fieldOfStudy: values[3],
                      graduationDate: values[4]
                    });
                    break;
                  case 'Work Experience':
                    this.workExperience.push({
                      jobTitle: values[1],
                      company: values[2],
                      location: values[3],
                      datesOfEmployment: values[4],
                      responsibilities: values[5]
                    });
                    break;
                  case 'Skills':
                    this.skills.push(values[1]);
                    break;
                  case 'Achievements and Awards':
                    this.achievements.push(values[1]);
                    break;
                  case 'Projects':
                    this.projects.push({
                      title: values[1],
                      description: values[2],
                      duration: values[3],
                      outcomes: values[4]
                    });
                    break;
                  default:
                    console.log(`Unrecognized section: ${values[0]}`);
                    break;
                }
              }
            }
  
            // Call the function to display the CV
            displayCV();
          })
          .catch(error => {
            console.log('Error reading CSV file:', error);
          });
      }
    }
// Function to display the CV
function displayCV() {
    // Create the HTML structure to display the CV
    const cvHTML = `
      <div class="cv-header">
        <h2>${cv.fullName}</h2>
        <p class="contact-info">
          <span>Phone:</span> ${cv.phoneNumber} | <span>Email:</span> ${cv.emailAddress}
        </p>
      </div>
      
      <div class="cv-section">
        <h3>Objective</h3>
        <p>${cv.objective}</p>
      </div>
      
      <div class="cv-section">
        <h3>Education</h3>
        ${cv.education.map(edu => `
          <div class="cv-subsection">
            <h4>${edu.degree}</h4>
            <p>${edu.institution}</p>
            <p>${edu.fieldOfStudy}</p>
            <p class="graduation-date">Graduation Date: ${edu.graduationDate}</p>
          </div>
        `).join('')}
      </div>
      
      <div class="cv-section">
        <h3>Work Experience</h3>
        ${cv.workExperience.map(exp => `
          <div class="cv-subsection">
            <h4>${exp.jobTitle}</h4>
            <p>${exp.company}</p>
            <p>${exp.location}</p>
            <p class="employment-dates">${exp.datesOfEmployment}</p>
            <ul class="responsibilities">
              ${exp.responsibilities.split('\n').map(responsibility => `<li>${responsibility}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
      
      <div class="cv-section">
        <h3>Skills</h3>
        <ul class="skills-list">
          ${cv.skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
      </div>
      
      <div class="cv-section">
        <h3>Achievements and Awards</h3>
        <ul class="achievements-list">
          ${cv.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
        </ul>
      </div>
      
      <div class="cv-section">
        <h3>Projects</h3>
        ${cv.projects.map(project => `
          <div class="cv-subsection">
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <p class="duration">Duration: ${project.duration}</p>
            <ul class="outcomes">
              ${project.outcomes.split('\n').map(outcome => `<li>${outcome}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>`;
  
    // Render the CV HTML
    cvContainer.innerHTML = cvHTML;
  }
  
      // Create an instance of the CV class
  const csvFilePath = 'CV.csv';
  const cv = new CV(csvFilePath);
});
