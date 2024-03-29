import React, {useState} from 'react';
import './Projects.css'
import BusyBee from './ProjectImages/BusyBee.png'
import MasterPeaceGrillHome from './ProjectImages/masterpeacegrillhome.jpg'
import PlantasticHome from './ProjectImages/PlantasticHome.png'
import BreweryTomfoolerly from './ProjectImages/BreweryTomfoolerly.png'
import comingsoon from './ProjectImages/comingsoon.jpg'

function Projects() {

  const [showSkills, setShowSkills] = useState(false);

  const projects = [
    {
      title: "Art Portfolio",
      screenshot: comingsoon,
      // demoLink: "https://www.linkedin.com/in/brooke-ross-se/",
      // linkedinLink: "https://www.linkedin.com/in/brooke-ross-se/",
      githubLink: "https://github.com/brookeross99/madison-portfolio",
      description: "Working in an Agile environment to create an art portfolio for local Colorado University Boulder Art Student. Client will be able to display art and sell it using a Paypal integrated checkout. Experience in Figma, Next.js, Tailwind, Bunnynet CDN, and paypal integration ",
      skillsTools:["Next.js","Tailwind CSS","Bunny Net CDN", "Paypal Integration","React.js", "Agile Environment", "Project Manager"]
    }
    ,
    {
      title: "Master Peace Grill",
      screenshot: MasterPeaceGrillHome,
      demoLink: "https://drive.google.com/file/d/1gyEq202fHD2VUiE1QYxJFcpxGOMwJpXo/view?usp=share_link",
      linkedinLink: "https://www.linkedin.com/in/brooke-ross-se/overlay/1635516789378/single-media-viewer/?profileId=ACoAADwX6XwB7YAaUUDQJDvgb33bSY7fuLptSgw",
      githubLink: "https://github.com/brookeross99/master_peace_grill",
      description: "Worked in sprints (agile development) with a 7 person team of remote, freelance software engineers. Customer is a restaurant owner who wanted a dynamic webpage that can update menu items both on desktop and mobile. Built using JavaScript, React, Ruby on Rails, AWS buckets and other modern technology. Full CRUD, RESTful. Collaborated with full stack development, css, and communicated with others via notion and discord channel. Organized vs code folders, and components for ease of access and reusable functionality. See demo for more detail on my contributions!",
      skillsTools:["React.js","JavaScript","CSS","HTML","AWS","Auth","Ruby on Rails","Bootstrap","Object-Oriented Programming","Agile Methodologies","Discord","Notion","Active Record","Fullstack Development","Github"]
    },
    {
      title: "Busy Bee",
      screenshot: BusyBee,
      demoLink: "https://drive.google.com/file/d/1RIgv0mcgRgVbSTbb0jXsSyd1UuY50P_q/view?usp=sharing",
      linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7008518393238605824/",
      githubLink: "https://github.com/brookeross99/denver-small-business",
      description: "This was my capstone project with Flatiron School. The Busy Bee focuses on community and the ability to connect a user to a sustainable small business. A user is able to create an account, edit their user profile, add a profile picture, search businesses, and review businesses (full CRUD). Built with Ruby and Active Record Associations to generate intricate back end databases that interact with React. Implemented Active Storage and AWS to connect image upload functionality with React front end. Managed the full timeline of the project independently with object oriented programming in mind.",
      skillsTools:["React.js","JavaScript","CSS","HTML","AWS","Auth","Ruby on Rails","Bootstrap","Object-Oriented Programming","Active Record","Active Storage","Full CRUD","Render","Relational Database","Fullstack Development","Github"]
    },
    {
      title: "Plantastic",
      screenshot: PlantasticHome,
      demoLink: "https://drive.google.com/file/d/1gtu1QvMETYhMjzYo08j-qqLcrkj7fAX_/view?usp=share_link",
      linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:6999479351482216448/",
      githubLink: "https://github.com/brookeross99/Plantastic-Phase-4",
      description: "My Phase 4 Project at Flatiron School! Collaborated with a team of 4. I had just learned Ruby on Rails and auth. Plantastic is an interactive application that allows a user to create posts about their plants. Each user has a unique login, including password authentication, and are able to like and comment on other users posts. Utilized Ruby and Active Record Associations to generate intricate back end databases. Implemented full CRUD capabilities - created with RESTful conventions- and several one to many, many to many, and many to many through relationships that interconnect with their React counterpart. Designed and deployed front end with React through Render.",
      skillsTools:["React.js","JavaScript","CSS","HTML","Auth","Ruby on Rails","Object-Oriented Programming","Active Record", "Full CRUD","Render","Relational Database","Fullstack Development","Third Party API","Github"]
    },
    {
      title: "Brewery Tomfoolerly",
      screenshot: BreweryTomfoolerly,
      demoLink: "https://drive.google.com/file/d/1AS3wNx_AZUAuZLvdVWUGXh_MlPn4fTBd/view?usp=share_link",
      linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:6998120993311395840/",
      githubLink: "https://github.com/brookeross99/brewery-tomfoolery-frontend",
      description: "Phase 3 project with Flatiron School.Collaborated with a team of 3. Brewery Tomfoolerly is an application for the Colorado Brewery lover. Users are able to create a unique login (at this point I had not learned auth yet) that allows them to create posts about brews from their favorite breweries. Users can also favorite other users' posts, and edit their own lists. Utilized Ruby and Active Record to generate interactive back end databases, with front end components. Implemented full CRUD capabilities - created with RESTful conventions- and several one to many relationships that interconnect with their React counterpart. Designed and deployed front end with React through Netlify and back end with Ruby, deployed to Heroku.",
      skillsTools:["React.js","JavaScript","CSS","HTML","Object-Oriented Programming","Full CRUD","Heroku","Netlify","Front-End Development","Third Party API","Github"]
    }
  ];

  return (
    <section id="projects">
      <h1>Projects Portfolio</h1>
      <div className="project-container">
        {projects.map((project) => (
          <div key={project.title} className="project">
              <img src={project.screenshot} alt={project.title} />
              <div className="overlay">
                <div className="description">{project.description}</div>
                <button className="see-skills" onClick={() => setShowSkills(!showSkills)}>See Skills</button>
                {showSkills && (
                  <div className="skills-tools">
                    <ul>
                      {project.skillsTools.map((skill) => (
                        <li key={skill} className="skill">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="links">
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  )}
                 {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                {project.linkedinLink && (
                  <a href={project.linkedinLink} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                )}
                </div>
              </div>
          </div>
        ))}
       <a href="#projects">See Archived Projects(coming soon)</a>
      </div>
    </section>
  );
}

export default Projects;
