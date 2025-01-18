const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
const year = today.getFullYear();

currentyear.innerHTML = year;
lastModified.innerHTML = `Last Modification: <span>${document.lastModified}</span>`;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

const courses = [
  {
      subject: 'CSE',
      number: 110,
      title: 'Introduction to Programming',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
      technology: [
          'Python'
      ],
      completed: true
  },
  {
      subject: 'WDD',
      number: 130,
      title: 'Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
      technology: [
          'HTML',
          'CSS'
      ],
      completed: true
  },
  {
      subject: 'CSE',
      number: 111,
      title: 'Programming with Functions',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
      technology: [
          'Python'
      ],
      completed: true
  },
  {
      subject: 'CSE',
      number: 210,
      title: 'Programming with Classes',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
      technology: [
          'C#'
      ],
      completed: true
  },
  {
      subject: 'WDD',
      number: 131,
      title: 'Dynamic Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
      technology: [
          'HTML',
          'CSS',
          'JavaScript'
      ],
      completed: true
  },
  {
      subject: 'WDD',
      number: 231,
      title: 'Frontend Web Development I',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
      technology: [
          'HTML',
          'CSS',
          'JavaScript'
      ],
      completed: false
  }
]

createCourseCard(courses);

const all = document.querySelector("#all");
const wdd = document.querySelector("#wdd");
const cse = document.querySelector("#cse");

all.addEventListener("click", () => {
  createCourseCard(courses.filter(course => course.certificate.includes("Web")));
});

wdd.addEventListener("click", () => {
  createCourseCard(courses.filter(course => course.subject.includes("WDD")));
});

cse.addEventListener("click", () => {
  createCourseCard(courses.filter(course => course.subject.includes("CSE")));
});

function createCourseCard(filteredCourses) {
  document.querySelector(".container").innerHTML = "";
  filteredCourses.forEach(course => {
    let card = document.createElement("button");
    let name = document.createElement("p");

    name.innerHTML = `${course.number} ${course.subject}`;

    card.appendChild(name);

    document.querySelector(".container").appendChild(card);
  });
}


/*
const currentcredits = document.querySelector("#currentcredits");

wdd.addEventListener("click", () => {
  reduce(courses.filter(course => course.subject.includes("WDD")));
});

cse.addEventListener("click", () => {
  reduce(courses.filter(course => course.subject.includes("CSE")));
});

function reduce(filteredCourses) {
  filteredCourses.forEach(course => {
    document.querySelector(".credits").innerHTML = "";
    const credits = 12;
    currentcredits.innerHTML = `The total number of credits show is: <span>${credits}</span>`;
  });
}
*/

const currentcredits = document.querySelector("#currentcredits");

const credits = 12;
currentcredits.innerHTML = `The total number of credits show is: <span>${credits}</span>`;