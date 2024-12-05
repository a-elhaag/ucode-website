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
        enroll: "https://forms.office.com/e/pkb6bGBVen", // Microsoft Forms link for Cybersecurity
    },
    {
        id: "web-development",
        name: "Web Development",
        description: "Learn HTML, CSS, JavaScript, and responsive design with libraries like React.",
        price: 900,
        duration: 3, // levels
        icon: "/assets/course_icons/Web Development.png",
        route: "/courses/web-development",
        enroll: "https://forms.office.com/e/F4yR2SmNYC", // Microsoft Forms link for Web Development
    },
    {
        id: "ai",
        name: "Artificial Intelligence",
        description: "Learn foundational concepts in Artificial Intelligence.",
        price: 900, // Add currency formatting in UI
        duration: 3, // levels
        icon: "/assets/course_icons/AI.png", // Update with relevant AI icon
        route: "/courses/ai",
        enroll: "https://forms.office.com/e/F4", // Update with AI-specific form link
    },
    {
        id: "scratch",
        name: "Scratch Programming",
        description: "Fundamentals of programming through an interactive platform.",
        price: 650, // per level, dynamically calculate for total levels in UI
        duration: 3, // levels
        icon: "/assets/course_icons/Scratch.png", // Use relevant Scratch course icon
        route: "/courses/scratch",
        enroll: "https://forms.office.com/e/F4mNYC", // Update with Scratch-specific form link
    }


];

export default courses;
