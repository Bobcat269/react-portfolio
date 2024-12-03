import { useState } from "react";
import "./App.css";

function App() {
  const codeSkills = [
    {name: "JavaScript", comfort: 6,  skillType: "Code"},
    {name: "HTML", comfort: 9, skillType: "Code"},
    {name: "CSS", comfort: 7, skillType: "Code"},
    {name: "SQL", comfort: 10, skillType: "Code"},
    {name: "Java",comfort: 6, skillType: "Code"},
    {name: "Python", comfort: 6, skillType: "Code"},    
    {name: "Microsoft SQL Server Suite", comfort: 10, skillType: "Code"}
  ];
const softSkills = [
  {name: "Agile Development", comfort: 10, skillType: "Soft"},
  {name: "Project Management", comfort: 9, skillType: "Soft"},
  {name: "Communication", comfort: 10, skillType: "Soft"}
]
const contact = [
  {name: "Phone", text: '888-867-5309'},
  {name: "Email", text: 'jennyivegotyournumber@gmail.com'},
  {name: "LinkedOut", text: 'deadlink.org'},
  {name: "BookFace", text: 'bookface.com/realHumanBean'},
]
const currentProjects =[
  {name: "SE Bootcamp", complete: false, endDate: '1/28/2025'},
  {name: "Painting the Sistine Chapel", complete: true, endDate: '3/21/1512'}
]
const titles = 'Product Manager, Web Developer, DBA'
const description = 'Creating elegant digital experiences to engage the user and loving every minute of it.'
  return (
    <>
      <h1>Chris Lee</h1>
      <h2>About</h2>
      <p>{titles}</p><br></br>
      <p>{description}</p>
      <h2>Code Skills</h2>
      <ul>
        {codeSkills.map((skill,index) => 
        <li key={index}>{skill.name}</li>
        )}
      </ul>

      <h2>Soft Skills</h2>
      <ul>
        {softSkills.map((skill,index) => 
        <li key={index}>{skill.name}</li>
        )}
      </ul>

      <h2>Current Projects</h2>
      <ul>
        {currentProjects.map((proj,index) => 
        <li key={index}>
          {proj.complete ? `${proj.name}: Completed - ${proj.endDate}` : `${proj.name}: in profectum`}
          </li>
        )}
      </ul>

      <h3>Contact</h3>
      <ul>
        {contact.map((info,index) => 
        <li key={index}>{info.name}: {info.text}</li>
        )}
      </ul>
    </>
  );
}

export default App;
