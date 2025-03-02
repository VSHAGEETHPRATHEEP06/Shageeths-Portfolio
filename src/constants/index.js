import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import smoothscroll from 'smoothscroll-polyfill'

// Kick off the polyfill
smoothscroll.polyfill()

export const HERO_CONTENT = {
  static: "I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Spring, Springboot, Express.js, Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional ",
  dynamic: ["user experiences.", "user experiences."]
};

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Spring, Spring Boot, Express.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "Management Information System",
    image: project1,
    description:
      "Leading Phase-2 development of the University of Ruhuna’s MIS. Designing a responsive frontend using React.js and creating UI/UX prototypes in Figma. Implementing key functionalities for record management and enhancing communication between students, lecturers, and administrators.",
    technologies: ["Spring Boot", "React", "Java", "JavaScript", "PostgreSQL"],
  },
  {
    title: "Speech Therapy Mobile App",
    image: project2,
    description:
      "Developed a speech therapy mobile app using Dart and Flutter. Incorporated machine learning for pronunciation improvement through video and lip movement analysis. Designed an intuitive user interface for a seamless user experience.",
    technologies: ["Dart", "Flutter", "Firebase"],
  },
  {
    title: "Doctor Appointment Management System",
    image: project3,
    description:
      "Built a Doctor Appointment Management System using the MERN stack. Enabled online appointment booking with CRUD functionality for managing doctors, patients, and appointments. Dveloped a responsive React-based user interface.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    title: "Doctor Appointment Mobile Application",
    image: project4,
    description:
      "Developed a Doctor Appointment mobile app using Kotlin, Android Studio, and Firebase. Implemented features such as appointment booking, doctor management, and secure data storage. Designed a modern and user-friendly interface for enhanced usability.",
    technologies: ["Kotlin", "Flutter", "Firebase"],
  },
];

export const CONTACT = {
  address: "38 Thalappaththu Road, Periyakalar, Batticaloa, Sri Lanka 30250 ",
  phoneNo: "+94 (76) 3549069",
  email: "shagith06@gmail.com",
};

export const CV = {
  fileName: 'Shageeth_Pratheep_CV.pdf',
  path: '/assets/Shageeth_CV.pdf'
}