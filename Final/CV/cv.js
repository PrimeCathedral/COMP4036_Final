const fs = require('fs');

class CV {
  constructor(csvFilePath) {
    this.fullName = '';
    this.phoneNumber = '';
    this.emailAddress = '';
    this.objective = '';
    this.education = [];
    this.workExperience = [];
    this.skills = [];
    this.achievementsAndAwards = [];
    this.projects = [];

    // Read the CSV file
    const csvData = fs.readFileSync(csvFilePath, 'utf-8');

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
            this.achievementsAndAwards.push(values[1]);
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
  }
}

// Usage example
const csvFilePath = 'cv_data.csv';
const cv = new CV(csvFilePath);

// Access the CV members
console.log(cv.fullName);
console.log(cv.phoneNumber);
console.log(cv.emailAddress);
console.log(cv.objective);
console.log(cv.education);
console.log(cv.workExperience);
console.log(cv.skills);
console.log(cv.achievementsAndAwards);
console.log(cv.projects);
