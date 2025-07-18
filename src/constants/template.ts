export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software development proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
<h1>Software Development Proposal</h1>
<h2>Project Overview</h2>
<p>Brief description of the proposed software development project.</p>
<h2>Scope of Work</h2>
<p>Detailed breakdown of project deliverables and requirements.</p>
<h2>Timeline</h2>
<p>Project milestones and delivery schedule.</p>
<h2>Budget</h2>
<p>Cost breakdown and payment terms.</p>
    `
  },
  {
    id: "project-proposal",
    label: "Project proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
<h1>Project Proposal</h1>
<h2>Introduction</h2>
<p>Overview of the project and its purpose.</p>
<h2>Objectives</h2>
<p>Key goals the project aims to achieve.</p>
<h2>Methodology</h2>
<p>Approach and methods to be used in the project.</p>
<h2>Expected Outcomes</h2>
<p>Summary of anticipated results.</p>
    `
  },
  {
    id: "business-letter",
    label: "Business letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
<h1>Business Letter</h1>
<p>[Sender’s Address]</p>
<p>[Date]</p>
<p>[Recipient’s Address]</p>
<p>Dear [Recipient Name],</p>
<p>Introductory paragraph outlining the purpose of the letter.</p>
<p>Main body with supporting information or details.</p>
<p>Closing paragraph with next steps or summary.</p>
<p>Sincerely,<br/>[Sender Name]</p>
    `
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
<h1>Full Name</h1>
<p>Email: example@example.com | Phone: 000-000-0000</p>
<h2>Summary</h2>
<p>Concise statement highlighting experience and skills.</p>
<h2>Education</h2>
<p>Institution Name – Degree – Year</p>
<h2>Experience</h2>
<p>Job Title – Company – Dates</p>
<ul>
  <li>Responsibility or achievement</li>
  <li>Responsibility or achievement</li>
</ul>
<h2>Skills</h2>
<ul>
  <li>Skill One</li>
  <li>Skill Two</li>
</ul>
    `
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
<h1>Cover Letter</h1>
<p>[Sender’s Address]</p>
<p>[Date]</p>
<p>[Recipient’s Address]</p>
<p>Dear [Recipient Name],</p>
<p>Opening paragraph introducing the purpose of the letter.</p>
<p>Body paragraph(s) detailing qualifications and interest.</p>
<p>Closing paragraph with a thank you and call to action.</p>
<p>Sincerely,<br/>[Sender Name]</p>
    `
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
<h1>Letter</h1>
<p>[Sender’s Address]</p>
<p>[Date]</p>
<p>[Recipient’s Address]</p>
<p>Dear [Recipient Name],</p>
<p>Opening paragraph stating the reason for the letter.</p>
<p>Body paragraph(s) providing additional context or explanation.</p>
<p>Closing paragraph summarizing or offering next steps.</p>
<p>Sincerely,<br/>[Sender Name]</p>
    `
  }
];
