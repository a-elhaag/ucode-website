const courses = [
    {
        id: "python",
        name: "Python",
        description: "Learn Python programming from scratch and build your first Python application.",
        price: 700, // EGP
        duration: 3, // months
        icon: "/assets/course_icons/Python.png",
        route: "/courses/python",
        enroll: "https://forms.office.com/your-python-form-url", // Microsoft Forms link for Python
    },
    {
        id: "cpp",
        name: "C++",
        description: "Start with our beginner-friendly course, where you\’ll learn the basics of programming.",
        price: 700,
        duration: 3, // months
        icon: "/assets/course_icons/CPP.png",
        route: "/courses/cpp",
        enroll: "https://forms.office.com/your-cpp-form-url", // Microsoft Forms link for C++
    },
    {
        id: "cybersecurity",
        name: "Cybersecurity",
        description: "An introduction to network security, encryption, and threat detection.",
        price: 900,
        duration: 3, // months
        icon: "/assets/course_icons/Cybersecurity.png",
        route: "/courses/cybersecurity",
        enroll: "https://forms.office.com/your-cybersecurity-form-url", // Microsoft Forms link for Cybersecurity
    },
    {
        id: "web-development",
        name: "Web Development",
        description: "Learn HTML, CSS, JavaScript, and responsive design with libraries like React.",
        price: 900,
        duration: 3, // months
        icon: "/assets/course_icons/Web Development.png",
        route: "/courses/web-development",
        enroll: "https://forms.office.com/your-web-development-form-url", // Microsoft Forms link for Web Development
    },

];

export default courses;
