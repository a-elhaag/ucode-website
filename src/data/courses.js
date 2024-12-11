const courses = [
    {
        id: "python",
        name: "Python",
        description: "Learn Python programming from scratch and build your first Python application.",
        price: 700, // EGP
        duration: 3, // levels
        icon: "/assets/course_icons/Python.png",
        route: "/courses/python",
        enroll: "https://forms.office.com/e/1T4CCWFHts", // Microsoft Forms link for Python
    },
    {
        id: "cpp",
        name: "C++",
        description: "Start with our beginner-friendly course, where you\’ll learn the basics of programming.",
        price: 700,
        duration: 3, // levels
        icon: "/assets/course_icons/CPP.png",
        route: "/courses/cpp",
        enroll: "https://forms.office.com/e/VWEyQV4qz0", // Microsoft Forms link for C++
    },
    {
        id: "cybersecurity",
        name: "Cybersecurity",
        description: "An introduction to network security, encryption, and threat detection.",
        price: 900,
        duration: 3, // levels
        icon: "/assets/course_icons/Cybersecurity.png",
        route: "/courses/cybersecurity",
        enroll: "https://forms.office.com/e/pkb6bGBVen",
    },
    {
        id: "web-development",
        name: "Web Development",
        description: "Learn HTML, CSS, JavaScript, and responsive design with libraries like React.",
        price: 900,
        duration: 3,
        icon: "/assets/course_icons/Web Development.png",
        route: "/courses/web-development",
        enroll: "https://forms.office.com/e/F4yR2SmNYC",
    },
    {
        id: "ai",
        name: "Artificial Intelligence",
        description: "Learn foundational concepts in Artificial Intelligence.",
        price: 900,
        duration: 3,
        icon: "/assets/course_icons/AI.png",
        route: "/courses/ai",
        enroll: "https://forms.office.com/e/e6jZxG958m",
    },
    {
        id: "uiux",
        name: "UI/UX Design",
        description: "Learn the principles of User Interface and User Experience design.",
        price: 900,
        duration: 3,
        icon: "/assets/course_icons/uiux.png",
        route: "/courses/uiux",
        enroll: "https://forms.office.com/e/TfyZkxfYQj",
    },


    {
        id: "scratch",
        name: "Scratch Programming",
        description: "Fundamentals of programming through an interactive platform.",
        price: 750, // per level, dynamically calculate for total levels in UI
        duration: 3, // levels
        icon: "/assets/course_icons/Scratch.png", // Use relevant Scratch course icon
        route: "/courses/scratch",
        enroll: "https://wa.me/message/E2CET4ZAD3IHB1", // Update with Scratch-specific form link
    }


];

export default courses;
