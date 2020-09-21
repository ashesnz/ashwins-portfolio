import Mock from "../mock";

const database = {
  information: {
    name: 'Ashwin Thakur',
    quoteContent: "\"Great software today is often preferable to perfect software tomorrow.\"",
    phone: '',
    language: 'English, Hindi',
    email: 'ashwin@thakur.co.nz',
    address: '',
    nationality: 'New Zealand Citizen',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/ashwin-thakur-a22594112',
      dribbble: '',
      github: 'https://github.com/ashesnz'
    },
    brandImage: '/images/ashwin.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/AshwinsCV.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'color-pallet',
      details: "Worked with organizing and structuring frontend enviornments in both educational and professional settings."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "Developed several web applications during the course of the UC Berkeley certification progra, utilizing both front and back end technologies."
    },
    {
      title: "Cooperative Experience",
      icon: 'handshake',
      details: "Has worked on major projects in teams, planning and coordinating with several people at once to develop entire applications."
    }
  ],
  hobbies: [
    {
      title: "Rugby"
    },
    {
      title: "Rugby League"
    },
    {
      title: "Cricket"
    },
    {
      title: "Poker"
    },
    {
      title: "Cryptic Crosswords"
    }
  ],
  skills: [
    {
      title: "Front-end frameworks (React, Angular, VueJS for web & mobile development \n" +
          "JQuery, HTML5, CSS3, Sass, Knockout.js)",
      value: 90
    },
    {
      title: "IOS and Android Hybrid Mobile App Development (Using Isomorphic JavaScript - Ionic Framework)",
      value: 85
    },
    {
      title: ".NET/Ruby/Node for Restful API and backend services",
      value: 80
    },
    {
      title: "AWS Services/Azure Devops/Concourse for deployments, Docker/Vagrant for container management",
      value: 75
    },
    {
      title: "Postgres, MongoDb, Redis (DB services)",
      value: 75
    },
    {
      title: "Github (Gitlab), SVN (repositories)",
      value: 85
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Guessing Game",
      subtitle: "HTML, CSS, Javastript",
      imageUrl: "/images/portfolio-image-1.jpg",
      // largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://ashesnz.github.io/guessinggame/'
    },
    {
      id: 2,
      title: "Gem Mining",
      subtitle: "HTML, CSS, JavaScript, jQuery",
      imageUrl: "/images/portfolio-image-2.jpg",
      // largeImageUrl: ["/images/portfolio-image-2-lg.jpg"],
      url: 'https://pinterest.com'
    },
    {
      id: 3,
      title: "Trivia Game",
      subtitle: "HTML, jQuery, Timers",
      imageUrl: "/images/portfolio-image-3.jpg",
      // largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: 'https://ashesnz.github.io/trivia_game/'
    },
    {
      id: 4,
      title: "Gif Generator",
      subtitle: "API, JSON, Ajax",
      imageUrl: "/images/portfolio-image-4.jpg",
      // largeImageUrl: [
      //   "/images/portfolio-image-4-lg.jpg",
      //   "/images/portfolio-image-4-lg2.jpg"
      // ],
      url: 'https://ashesnz.github.io/gifgenerator/'
    },
    {
      id: 5,
      title: "Firebase Train Scheduler",
      subtitle: "Firebase, HTML, JavaScript",
      imageUrl: "/images/portfolio-image-5.jpg",
      // largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
      url: 'https://ashesnz.github.io/trainschedule/'
    },
    {
      id: 6,
      title: "Burger Time",
      subtitle: "Mongo, Express, Node",
      imageUrl: "/images/portfolio-image-6.jpg",
      // largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
      url: 'https://damp-mountain-93742.herokuapp.com/burgers'
    },
    {
      id: 7,
      title: "React Shuffle",
      subtitle: "React",
      imageUrl: "/images/portfolio-image-7.jpg",
      // largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://react-gameucbextension2018.herokuapp.com/'
    },
    {
      id: 8,
      title: "NYT Article Scraper",
      subtitle: "React, Mongoose, Cheerio",
      imageUrl: "/images/portfolio-image-8.jpg",
      // largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
      url: 'https://young-river-49658.herokuapp.com/'
    },
    {
      id: 9,
      title: "Demoquest",
      subtitle: "Mongoose, Express, React, Node",
      imageUrl: "/images/portfolio-image-9.jpg",
      // largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
      url: 'https://demoquest.herokuapp.com/'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "Dec 2019 - Present",
        position: "Software Developer",
        company: "Livestock Improvement Automation",
        details: ".NET and Angular development with Azure DevOps, upgrading their core automation product Protrack Shed. Agile processes were used, working closely with Product Owners/Product design Analysts/Testers and other developers in delivering " +
            "these core features."
      },
      {
        id: 2,
        year: "Jan 2013 - Dec 2019",
        position: "Rapid Prototyping Developer",
        company: "Livestock Improvement Corporation",
        details: "Responsible for building web applications with the use of UX best practice to deliver consumer-centric solutions. Worked with our core users (farmers) to paper-prototype, digital-prototype and then build solutions. \n" +
            "\n" +
            "Core projects\n" +
            "\n" +
            "\n" +
            "Pasture satellite integration with external parties (thru APIs) in delivering an auditing tool for our internal staff to help validate pasture reports for our external customers.\n" +
            "\n" +
            "Grazing planning mobile (Progressive web application) to help farmers manage their paddocks on their device with the help of LIC’s core feed management system (MINDA Land & Feed).  \n" +
            "\n" +
            "Web application for vets, being able view animal reproduction data across the vet’s client farms, also having the ability to generate reports for their clients. This consisted of using the largest animal dataset in the country which provided animal health, reproduction information. Dataset was extracted daily and served onto the production server using enterprise service bus technology (Ruby).\n"
      },
      {
        id: 3,
        year: "Apr 2012 - Nov 2012",
        position: "Software Developer",
        company: "Developer for 1-day/Torpedo 7/Urbandaddy",
        details: ".NET (MVC3) development which involved continuous improvement to website, other work included building a web application which used the Trademe & Quicksales (Australian auction site) API using .NET\n" +
            "\n" +
            "Experience with Java/JSP Servlets, project work for 1-day mobile development, included constructing/developing a web application for the mobile platform.\n" +
            "\n" +
            "Other support tasks given were email generation & website content update for Torpedo7 which was sent to over 100,000 users.\n" +
            "\n" +
            "Worked in an agile environment using SCRUM, fortnightly sprints and daily morning catch-ups.\n"
      },
      {
        id: 4,
        year: "2004 - 2012",
        position: "IT Programmer",
        company: "Hills Laboratories",
        details: "Eight years’ experience with the use of Delphi 5, 7 and 2006, 2010. This involved working on one of the most important and largest projects for the company, upgrading their laboratory system (LabSys2™ to LabSys3 ). The system was designed and built using object-oriented techniques with the use of several ActiveX controls and accesses an in-house database (Firebird). \n" +
            "\n" +
            "The system itself (Labsys3) consisted of a wide range of features such as worksheet creation which then generated reports, invoices and quotes for our clients. The system also contained our client and staff contact information.\n" +
            "\n" +
            "I was responsible for maintaining and upgrading the laboratory system after completion of the upgrade. All the code was written in-house and stored in a SVN repository (previously CVS) except for certain components (such as Report Builder/Fast Report/Express Spreadsheet).\n"
      },
      {
        id: 5,
        year: "2002",
        position: "Technical support person",
        company: "Hoare Research Software",
        details: "Primarily responsible for providing application support to HRS clients via phone/email.\n" +
            "\n" +
            "The products were mathematics-based software for data analysis and modelling, such as Matlab, STATISTICA, Mathcad, Mathematica, ChemOffice, @RISK, Forecast Pro, SurveyPro.\n" +
            "Other tasks included the maintenance of an existing 200-page web site.\n"
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2002",
        graduation: "B.C.M.S (Bachelor of Computing and Mathematical Sciences)\n",
        university: " - Waikato University",
        details: "Major in Software Engineering - 4 Year Degree"
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: "React new version is coming!",
      imageUrl: "/images/blog-image-1.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    {
      id: 2,
      title: "More about react hooks",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "04 December 2019"
    },
    {
      id: 3,
      title: "Next generation javascript learning source",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "05 December 2019"
    },
    {
      id: 4,
      title: "Free tutorial downloading link.",
      imageUrl: "/images/blog-image-2.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "06 December 2019"
    },
    {
      id: 5,
      title: "Get 2500 free mockup for design.",
      youtubeUrl: "TKnufs85hXk",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "08 December 2019"
    },
    {
      id: 6,
      title: "React vs Vue vs Angular, what is best?",
      vimeoUrl: "23534361",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "10 December 2019"
    },
    {
      id: 7,
      title: "Web design typography & spacing.",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    {
      id: 8,
      title: "React new version is coming with a great features.",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    }
  ],
  contactInfo: {
    phoneNumbers: ['(021) 188-2309'],
    emailAddress: ['ashwin@thakur.co.nz'],
    address: "Hamilton, New Zealand"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});