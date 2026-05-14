import './style.css'

function renderHeader(){
    const headerSection = document.querySelector(".header");
    headerSection.innerHTML = `
        <div class="title">
            <a href="#home" class="logo">&lt;<strong>G</strong>PA/&gt;</a>
        </div>
        <nav class="header-nav">
            <ul>
                <li class="navHome"><a href="#home">Home</a></li>
                <li class="navAbout"><a href="#about">About</a></li>
                <li class="navProjects"><a href="#projects">Projects</a></li>
            </ul>
            <div class="navContact"><a href="#contact" class="contactLink">Contact</a></div>
        </nav>
    `
}

const homeDetails = {
    intro : "Hi there, I'm",
    name : "Guillermo Parejo Alonso",
    description : "A web developer passionate about transforming ideas into end-to-end digital experiences.",
}

function renderHome(){
    const homeSection = document.querySelector(".home");
    homeSection.innerHTML = `
        <div class="homeInfo">
            <p class="intro-text">${homeDetails.intro}</p>
            <h1 class="hero-name">${homeDetails.name}</h1>
            <h2 class="hero-subtitle">${homeDetails.description}</h2>
        </div>
        <img src="./assets/Linkedin-Img.jpg" alt="My photo" class="hero-img">
    `;
}

const aboutInfo = {
    title : "Who I am",
    description : "I'm a web developer who loves turning complex problems into simple, functional designs. I consider myself a naturally curious and self-taught person. I've found the perfect balance between logic and creativity in Front-End development, but my vision goes beyond that: I'm continuously learning to master the complete development cycle as a Full-Stack developer. I strongly believe in clean code and lifelong learning.",
    skills : ["JavaScript", "HTML", "CSS", "Git"],
    specialty: "Application Logic & Interactive Web Apps",
    education: "Self-taught",
    learning: "Full-Stack Path (Node.js) at The Odin Project"
}

function renderAbout(){
    const aboutSection = document.querySelector(".about");
    
    let skillsHTML = ``;
    
    aboutInfo.skills.forEach((skill) => {
        skillsHTML += `<span class="skill-tag">${skill} </span>`
    });

    aboutSection.innerHTML = `
        <div class="about-container">
            <p class="section-intro">About me</p>
            <h2 class="section-title">${aboutInfo.title}</h2>
            <div class="about-content">
                <p class="section-content">${aboutInfo.description}</p>
            </div>
            <div class="about-details-grid">
                <div class="tech-stack-section">
                    <p class="label-green">Tech Stack</p>
                    <h3 class="tech-title">What I'm good at 💻</h3>
                    
                    <div class="skills-pill">
                        ${skillsHTML}
                    </div>
                </div>
                <div class="detail-item">
                    <p class="label-green">Specialty</p>
                    <p class="detail-text">${aboutInfo.specialty}</p>
                </div>
                
                <div class="detail-item">
                    <p class="label-green">Education</p>
                    <p class="detail-text">🎓 ${aboutInfo.education}</p>
                </div>
                <div class="detail-item">
                    <p class="label-green">Currently Learning</p>
                    <p class="detail-text">📚 ${aboutInfo.learning}</p>
                </div>
            </div>
        </div>
    `
}

const projects = [
    {
        name: "Lysto",
        description: "Lysto is a modern and responsive task management web application built with HTML, CSS, and JavaScript.",
        techs: ["HTML", "CSS", "JavaScript"],
        linkGit: "https://github.com/GParej0/Lysto",
        linkLive: "https://gparej0.github.io/Lysto/",
        preview: "./assets/Lysto.png", 
    },
    {
        name: "Weather app",
        description: "A modern and responsive Weather App built with HTML, CSS, and JavaScript.",
        techs: ["HTML", "CSS", "JavaScript"],
        linkGit: "https://github.com/GParej0/WeatherApp",
        linkLive: "https://gparej0.github.io/WeatherApp/",
        preview: "./assets/Weather-app.png", 
    },
    {
        name: "Mercedes-Benz Landing Page",
        description: "A modern, elegant, and fully responsive landing page inspired by the Mercedes-Benz brand. ",
        techs: ["HTML", "CSS"],
        linkGit: "https://github.com/GParej0/Merecedes-Benz-Landing-Page",
        linkLive: "https://gparej0.github.io/Merecedes-Benz-Landing-Page/",
        preview: "./assets/Mercedes-Benz.png", 
    },
    {
        name: "Restaurant Page",
        description: "A modern restaurant website built with JavaScript and bundled using Webpack.",
        techs: ["HTML", "CSS", "JavaScript"],
        linkGit: "https://github.com/GParej0/Restaurant-Page",
        linkLive: "https://gparej0.github.io/Restaurant-Page/",
        preview: "./assets/Restaurant-page.png", 
    }
]

function renderProjects(){
    const projectSection = document.querySelector(".projects")

    let projectHTML = "";

    projects.forEach((project) =>{
        let techsHTML = ``;
        project.techs.forEach((tech) =>{
            techsHTML += `<span class="tech-tag">${tech} </span>`
        })

        projectHTML += `
            <div class="project-card">
                <div class="project-img-container">
                    <a href="${project.linkLive}" target="_blank" rel="noopener noreferrer"><img src="${project.preview}" alt="Preview ${project.name}" class="project-img"></a>
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.name}</h3>
                    <p class="project-desc">${project.description}</p>
                    <div class="project-techs">${techsHTML}</div>
                    
                    <div class="project-links">
                        <a href="${project.linkLive}" target="_blank" rel="noopener noreferrer" class="btn-live">Live Demo 🔗</a>
                        <a href="${project.linkGit}" target="_blank" rel="noopener noreferrer" class="btn-code">GitHub <img src="./assets/github-svg.svg" class="contactBtn"></a>
                    </div>
                </div>
            </div>
        `
    })

    projectSection.innerHTML = `
        <div class="project-intro">
            <p class="p-intro">Portfolio</p>
            <h2 class="project-title">Projects</h2>
            <h3>This is some of my work!</h3>
        </div>
        <div class="projects-container">
            ${projectHTML}
        </div>
    `

}

const contactInfo = {
    title: "Get in touch",
    message: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    github: "https://github.com/GParej0",
    linkedin: "www.linkedin.com/in/guillermoparejo",
    mail: "guillermoparejo06@gmail.com",
    resume: "./assets/Guillermo_English_CV.pdf",
}

function renderContact (){
    const contactSection = document.querySelector(".contact");

    contactSection.innerHTML = `
        <div class="contact-container">
            <h2 class="section-title">${contactInfo.title}</h2>
            <p class="contact-message">${contactInfo.message}</p>
            
            <div class="contact-links">
                <a href="mailto:${contactInfo.mail}" class="btn-primary" title="Send me an email"><img src="./assets/email-svg.svg" class="contactBtn"></a>
                
                <a href="${contactInfo.resume}" target="_blank" class="btn-resume" title="Download my CV"><img src="./assets/curriculum-svg.svg" class="contactBtn"></a>
                
                <a href="${contactInfo.linkedin}" target="_blank" class="btn-social" title="Access to my Linkedin"><img src="./assets/linkedin-svg.svg" class="contactBtn"></a>
                <a href="${contactInfo.github}" target="_blank" class="btn-social" title="Access to my Github"><img src="./assets/github-svg.svg" class="contactBtn"></a>
            </div>
        </div>`

}

function renderFooter (){
    const footerSection = document.querySelector(".footer");

    const currentYear = new Date().getFullYear();

    footerSection.innerHTML =`
        <div class="footer-container">
            <p class="copyright">Designed & Built by Guillermo Parejo &copy; ${currentYear}</p>

            <a href="#" class="back-to-top"><img src="./assets/up-arrow.svg"> Back to top</a>
        </div>
    `
}

function renderPage(){
    renderHeader();
    renderHome();
    renderAbout();
    renderProjects();
    renderContact();
    renderFooter();
}


document.addEventListener("DOMContentLoaded", renderPage);