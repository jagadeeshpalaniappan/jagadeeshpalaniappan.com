import React from "react";

function getAge(d1, d2) {
  d2 = d2 || new Date();
  var diff = d2.getTime() - d1.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

const navbarLinks = [
  {
    name: "Download My Resume",
    isExternalUrl: false,
    srcUrl:
      "https://raw.githubusercontent.com/jagadeeshpalaniappan/jagadeeshpalaniappan.github.io/master/jagadeesh-palaniappan-fullstack-dev.pdf",
    iconClassName: "fas fa-cloud-download-alt fa-2x"
  },
  {
    name: "LinkedIn",
    isExternalUrl: true,
    srcUrl: "https://www.linkedin.com/in/jagadeeshpalaniappan/",
    iconClassName: "fab fa-linkedin fa-2x",
    iconOnly: true
  },
  {
    name: "Github",
    isExternalUrl: true,
    srcUrl: "https://github.com/jagadeeshpalaniappan",
    iconClassName: "fab fa-github fa-2x",
    iconOnly: true
  },
  {
    name: "Facebook",
    isExternalUrl: true,
    srcUrl: "https://www.facebook.com/jagadeeshpalaniappan",
    iconClassName: "fab fa-facebook-square fa-2x",
    iconOnly: true
  },
  {
    name: "Call",
    isExternalUrl: true,
    srcUrl: "tel:+14085335628",
    iconClassName: "fas fa-phone-alt fa-2x",
    iconOnly: true
  }
];

const intro = {
  avatarUrl: "http://jagadeeshpalaniappan.github.io/assets/img/jag/hero1.jpg",
  name: "Jagadeesh Palaniappan",
  keywords: [
    "React Developer",
    "Angular.js Developer",
    "Node.js Developer",
    "Java-Spring Developer"
  ],
  line1: (
    <>
      I'm a passionate software developer and have more than{" "}
      <b>{getAge(new Date(2011, 8, 30))} years</b> of experience in building rich web applications.
    </>
  ),
  line2Old: (
    <>
      I'm a <b>full-stack developer</b> specialised in <b>frontend</b> and <b>backend</b>{" "}
      development for building complex scalable web apps
    </>
  ),
  line2: (
    <>
      I'm a <b>full-stack developer</b> starting from designing, developing (<b>Front-End</b> and{" "}
      <b>Back-End</b>) application, building and deploying them on Cloud{" "}
    </>
  )
};

const education = {
  title: "Education",
  iconClass: "fas fa-user-graduate",
  items: [
    {
      title: "Master Degree (MS)",
      description: "Software Engineering",
      line1: "BITS Pilani",
      className: "mb-4"
    },
    {
      title: "Bachelor Degree (B.Tech)",
      description: "Information Technology (IT)",
      line1: "SASTRA University",
      className: "mb-4"
    }
  ]
};

const workExp = {
  title: "Work Experience",
  iconClass: "fas fa-briefcase",
  items: [
    {
      title: "Senior Software Engineer",
      description: "GE Digital, San Ramon",
      year: { start: "2016", end: "Current" }
    },
    {
      title: "Senior Software Engineer",
      description: "Cisco, San Jose",
      year: { start: "2015", end: "2016" }
    },
    {
      title: "Senior Software Engineer",
      description: "Tech Mahindra, Hyderabad",
      year: { start: "2011", end: "2015" }
    }
  ]
};

const fullStackDev = {
  title: "Full Stack Developer",
  iconClass: "fas fa-user-tie",
  items: [
    { title: "UI Developer", keywords: ["React / Redux", "Angular.js"], className: "mb-4" },
    { title: "Node.js Developer", keywords: ["Node.js", "Express", "REST API"], className: "mb-4" },
    { title: "Java Developer", keywords: ["Java", "Spring", "REST API"], className: "mb-4" }
  ],
  footer: "View All My Skills"
};

const achievements = [
  {
    title: "Learn and Adapt To Win (Award)",
    description:
      "I have developed a prototype to control Web Application using voice (Alexa / Google Home). This means you can natively talk and control web or mobile application.",
    srcUrl:
      "https://raw.githubusercontent.com/jagadeeshpalaniappan/jagadeeshpalaniappan.github.io/master/assets/jag/awards/ge/award2-learn-and-adapt-to-win.pdf"
  },
  {
    title: "Customers Determine Our Success (Award)",
    description:
      "there was a requirement from customer which is highly wanted which has been scheduled for Q1 release. " +
      "I always beleive in 'customer first is key to success', I quickly completed my Q1 deliverables and delivered the customer wanted Q2 feature in Q1 release itself",
    srcUrl:
      "https://raw.githubusercontent.com/jagadeeshpalaniappan/jagadeeshpalaniappan.github.io/master/assets/jag/awards/ge/award1-customers-determine-our-success.pdf"
  },
  {
    title: "Customers Determine Our Success (Award)",
    description:
      "For troubleshooting and fix the Rasgas (one of our core customer) fixed the issues very quickly by steching my weekend holidays. As a result 'Customers' were happy with the real quick fix",
    srcUrl:
      "https://raw.githubusercontent.com/jagadeeshpalaniappan/jagadeeshpalaniappan.github.io/master/assets/jag/awards/ge/award3-customers-determine-our-success.pdf"
  }
];

const testimonials = [
  {
    name: "Shivkumar Krishnan",
    designation: "Head of Engineering",
    company: "Gap Tech Inc",
    avatarUrl:
      "https://media.licdn.com/dms/image/C4D03AQGl5-dOn3D3Tg/profile-displayphoto-shrink_100_100/0?e=1572480000&v=beta&t=qMHYL4l05Ga3opkL0EUn4kA0fUSX6JPi2c7RWPHlwqY",
    linkedInUrl: "",
    width: "1000px",
    description:
      "Jagadeesh was one of the key contributors in GE (APM- Analysis Team). He is a fast learner and quickly adapted to the new technology and team culture from the day he joined the team. Jagadeesh develops features quickly without compromising the quality and proactively took up many technical challenges and solved them with creative solutions. He doesn’t hesitate to take risks and is open to trying new opportunities that may not have a clear roadmap ahead. He has also mentored junior developers and interns in the team." +
      "Apart from his strong skills in feature delivery, Jagadeesh is also very passionate about innovation when presented with new opportunities such as multi modal interaction. He rapidly learnt the techniques to build Alexa Skills and Xbox Kinnect gesture controls and integrated with APM within few weeks and built a cool proof of concept that amazed the organization." +
      "Jagadeesh is very passionate, self-motivated and driven engineer who will be a great asset to any software organization."
  },
  {
    name: "Jim Defrisco",
    designation: "Senior Staff Software Developer",
    company: "ServiceNow",
    avatarUrl:
      "https://media.licdn.com/dms/image/C4E03AQGr90OM-Ba4WQ/profile-displayphoto-shrink_100_100/0?e=1572480000&v=beta&t=WSx-UXjsfmPZ0Z_lAjrjj_HepiuRU6v_kSKZElLbOUY",
    linkedInUrl: "",
    width: "700px",
    description:
      "Jagadeesh joined the APM Analysis team where I was the tech lead and had an immediate impact on the group’s productivity. He never balked at an assignment and in fact stepped up to do some side research on a new initiative around voice control of our interface. An eager learner, he quickly became one of the most valuable members of the staff. I thoroughly enjoyed working with him and hope our paths cross again."
  },
  {
    name: "Santhosh Muktha",
    designation: "Principal Engineer",
    company: "Oracle",
    avatarUrl: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    linkedInUrl: "",
    width: "700px",
    description:
      '"SMAC" is the first word that comes to my mind when I think of Jagadeesh. Jagadeesh has outstanding Technical and Analytical skills, He had been working for four years in Cisco Capital Projects. \n' +
      "He is a self-starter, energy incubator of my team. A Full Stack developer, drives end-to-end conceptualization to delivery. Jagadeesh has passion and exceptional knowledge in UI / UX, System designing. Picksup latest technologies with ease and quick. \n" +
      "He is a go-getter and goto person for POCs. A dedicated person, goes an extra mile for making a difference. He led 'Team Hackathon' for our Org and made it. \n" +
      "As a good developer and leader, He earns my highest recommendation."
  }
];

const devSkills = [
  {
    title: (
      <>
        Front-End: <small>(Web Development)</small>
      </>
    ),
    keywords: [
      {
        label: "React",
        tooltip: "Experience with React",
        highlight: true
      },
      {
        label: "Redux",
        tooltip: "Experience with Redux"
      },
      {
        label: "Angular.js",
        tooltip: "Experience with Angular.js",
        highlight: true
      },
      {
        label: "Web Components",
        tooltip: "Experience with Web Components"
      },
      {
        label: "Polymer",
        tooltip: "Experience with Polymer"
      },
      {
        label: "Single Page Application",
        tooltip: "Experience with Single Page Application"
      },
      {
        label: "Micro-FrontEnd Application",
        tooltip: "Experience with Micro-FrontEnd Application"
      },
      {
        label: "ES6",
        tooltip: "Experience with ES6",
        highlight: true
      },
      {
        label: "TypeScript",
        tooltip: "Experience with TypeScript"
      },
      {
        label: "Predix UI Components",
        tooltip: "Experience with Predix UI Components"
      },
      {
        label: "Bootstrap",
        tooltip: "Experience with Bootstrap",
        highlight: true
      },
      {
        label: "Responsive Web Design",
        tooltip: "Experience with Responsive Web Design"
      },
      {
        label: "jQuery",
        tooltip: "Experience with jQuery"
      },
      {
        label: "AJAX",
        tooltip: "Experience with AJAX"
      },
      {
        label: "HTML5",
        tooltip: "Experience with HTML5"
      },
      {
        label: "CSS3",
        tooltip: "Experience with CSS3"
      },
      {
        label: "JavaScript",
        tooltip: "Experience with JavaScript",
        highlight: true
      },
      {
        label: "SASS",
        tooltip: "Experience with SASS"
      },
      {
        label: "Lodash",
        tooltip: "Experience with Lodash"
      }
    ]
  },
  {
    title: (
      <>
        Back-End: <small>(Node.js Development)</small>
      </>
    ),
    keywords: [
      {
        label: "MEAN Stack ",
        tooltip: "Experience with MEAN Stack (MongoDB, Express, Node.js, Angular.js, Node.js)",
        highlight: true
      },
      {
        label: "Node.js",
        tooltip: "Experience with Node.js",
        highlight: true
      },
      {
        label: "Express.js",
        tooltip: "Experience with Express.js",
        highlight: true
      },
      {
        label: "Bluebird (Promise)",
        tooltip: "Experience with Bluebird (Promise)"
      },
      {
        label: "Passportjs",
        tooltip: "Experience with Passportjs"
      },
      {
        label: "Helmetjs",
        tooltip: "Experience with Helmetjs"
      },
      {
        label: "Requestjs",
        tooltip: "Experience with Requestjs"
      },
      {
        label: "Mongoose",
        tooltip: "Experience with Mongoose"
      },
      {
        label: "RESTful API",
        tooltip: "Experience with Building and Consuming a RESTful API endpoints using Spring",
        highlight: true
      }
    ]
  },
  {
    title: (
      <>
        Back-End: <small>(Node.js Development)</small>
      </>
    ),
    keywords: [
      {
        label: "Java",
        tooltip: "Experience with Java",
        highlight: true
      },
      {
        label: "J2EE",
        tooltip: "Experience with J2EE"
      },
      {
        label: "Spring MVC",
        tooltip: "Experience with Spring MVC"
      },
      {
        label: "Spring Boot",
        tooltip: "Experience with Spring Boot",
        highlight: true
      },
      {
        label: "JSP",
        tooltip: "Experience with JSP"
      },
      {
        label: "Servlets",
        tooltip: "Experience with Servlets"
      },
      {
        label: "OOPS",
        tooltip: "Experience with OOPS",
        highlight: true
      },
      {
        label: "RESTful API",
        tooltip: "Experience with Building and Consuming a RESTful API endpoints using Spring",
        highlight: true
      },
      {
        label: "SOAP API",
        tooltip: "Experience with Building and Consuming SOAP API endpoints using Spring"
      },
      {
        label: "Webservices",
        tooltip: "Experience with Webservices"
      },
      {
        label: "JAX-WS",
        tooltip: "Experience with JAX-WS"
      },
      {
        label: "JPA",
        tooltip: "Experience with JPA"
      },
      {
        label: "Quartz Scheduler",
        tooltip: "Experience with Quartz Scheduler"
      }
    ]
  }
];

const otherSkills = [
  {
    title: "Cloud",
    keywords: [
      {
        label: "AWS",
        tooltip: "Experience with AWS (EC2, RDS, S3)",
        highlight: true
      },
      {
        label: "Cloud Foundry (Predix)",
        tooltip: "Experience with Cloud Foundry (Predix)"
      },
      {
        label: "Heroku",
        tooltip: "Experience with Heroku"
      },
      {
        label: "OpenShift",
        tooltip: "Experience with OpenShift"
      },
      {
        label: "IBM-Bluemix",
        tooltip: "Experience with IBM-Bluemix"
      }
    ]
  },
  {
    title: "Database",
    keywords: [
      {
        label: "NoSQL",
        tooltip: "Experience with NoSQL",
        highlight: true
      },
      {
        label: "MongoDB",
        tooltip: "Experience with MongoDB",
        highlight: true
      },
      {
        label: "Redis",
        tooltip: "Experience with Redis",
        highlight: true
      },
      {
        label: "SQL",
        tooltip: "Experience with SQL"
      },
      {
        label: "Oracle",
        tooltip: "Experience with Oracle"
      },
      {
        label: "MySQL",
        tooltip: "Experience with MySQL"
      }
    ]
  },
  {
    title: "Testing",
    keywords: [
      {
        label: "Mocha",
        tooltip: "Experience with Mocha",
        highlight: true
      },
      {
        label: "Karma",
        tooltip: "Experience with Karma"
      },
      {
        label: "Chai",
        tooltip: "Experience with Chai"
      },
      {
        label: "Sinon",
        tooltip: "Experience with Sinon"
      },
      {
        label: "Istanbul",
        tooltip: "Experience with Istanbul"
      },
      {
        label: "Protractor",
        tooltip: "Experience with Protractor",
        highlight: true
      },
      {
        label: "Cucumber",
        tooltip: "Experience with Cucumber"
      },
      {
        label: "Karate",
        tooltip: "Experience with Karate"
      }
    ]
  },
  {
    title: "Build Tools",
    keywords: [
      {
        label: "NPM",
        tooltip: "Experience with NPM"
      },
      {
        label: "Bower",
        tooltip: "Experience with Bower"
      },
      {
        label: "Gulp",
        tooltip: "Experience with Gulp"
      },
      {
        label: "Grunt",
        tooltip: "Experience with Grunt"
      },
      {
        label: "WebPack",
        tooltip: "Experience with WebPack"
      },
      {
        label: "DevOps",
        tooltip: "Experience with DevOps"
      },
      {
        label: "Jenkins",
        tooltip: "Experience with Jenkins"
      },
      {
        label: "CI / CD",
        tooltip: "Experience with CI / CD"
      },
      {
        label: "uDeploy",
        tooltip: "Experience with uDeploy"
      },
      {
        label: "HP Kintana",
        tooltip: "Experience with HP Kintana"
      }
    ]
  },
  {
    title: "Version Control System",
    keywords: [
      {
        label: "Git",
        tooltip: "Experience with Git",
        highlight: true
      },
      {
        label: "SVN",
        tooltip: "Experience with SVN"
      },
      {
        label: "CVS",
        tooltip: "Experience with CVS"
      }
    ]
  },
  {
    title: "Documentation",
    keywords: [
      {
        label: "Markdown",
        tooltip: "Experience with Markdown"
      },
      {
        label: "Swagger",
        tooltip: "Experience with Swagger"
      }
    ]
  }
];

const skills = {
  devSkills,
  otherSkills
};

const leadershipSkills = {
  scrumMaster: [
    {
      label: "Keeping all team members on track and clearing their blockers and other dependencies"
    },
    {
      label: "Actively monitoring the userstories, defects and clearing the backlogs."
    },
    {
      label:
        "Organizing the sprint planning with team members and product owners and ensuring the team’s deleiverables."
    },
    {
      label:
        "Constantly receiving feedbacks from team members during Sprint retrospective and work towards improvement."
    }
  ],
  teamLead: [
    {
      label: "Lead a team of 4 junior developers"
    },
    {
      label: "Collabrating with overseas team members"
    },
    {
      label: "Clear Communicator"
    },
    {
      label: "Delegating tasks to the right team members"
    },
    {
      label: "Proactively taking initiatives towards improvement"
    },
    {
      label: "Documenting the application design and common issues"
    },
    {
      label: "Constantly motivating the team members and other co-workers"
    }
  ],
  leader: [
    "Leading an Agile Software Product team, participate in team activities to develop customer-centric, sustainable, APIs",
    "Mentoring and guiding developers to build an architecturally sustainable codebase that delivers a high-quality experience",
    "Collaborating with Developers and Product Owners on the team to define, design, build and ship new features",
    "Desire to build sustainable solutions that span across projects and platforms keeping an eye towards simplicity, reusability, reliability, manageability, scalability and performance.",
    "Participating in hiring activities including screening and interviewing both Full-Time employees and contractor"
  ],
  keywords: [
    "Scrum Master",
    "Team Leader",
    "Strong sense of personal accountability",
    "Desire to contribute beyond job role and responsibilities",
    "Clear Communicator",
    "Collaborating with overseas team members",
    "Delegating tasks to the right team members",
    "Motivating the Team members",
    "Documenting the application design and common issues"
  ]
};

const achievementsGallery = [
  {
    src: "http://jagadeeshpalaniappan.github.io/assets/img/jag/professional/4.jpg",
    width: 3,
    height: 4
  },
  {
    src: "http://jagadeeshpalaniappan.github.io/assets/img/jag/professional/1.jpg",
    width: 4,
    height: 3
  },
  {
    src: "http://jagadeeshpalaniappan.github.io/assets/img/jag/professional/6.jpg",
    width: 4,
    height: 2
  },

  {
    src: "http://jagadeeshpalaniappan.github.io/assets/img/jag/professional/3.jpg",
    width: 4,
    height: 3
  },
  {
    src: "http://jagadeeshpalaniappan.github.io/assets/img/jag/professional/7.jpg",
    width: 4,
    height: 3
  },
  {
    src: "http://jagadeeshpalaniappan.github.io/assets/img/jag/professional/2.jpg",
    width: 4,
    height: 3
  },
  {
    src: "http://jagadeeshpalaniappan.github.io/assets/img/jag/professional/5.jpg",
    width: 4,
    height: 2
  }
];

export {
  navbarLinks,
  intro,
  workExp,
  education,
  fullStackDev,
  skills,
  leadershipSkills,
  achievements,
  achievementsGallery,
  testimonials
};
