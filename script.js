fetch("resume.json").then(response => response.json()).then(data => {
    document.getElementById("name").textContent = data.name;
    document.getElementById("title").textContent = data.title;
    document.getElementById("about-text").textContent = data.about;
    document.getElementById("email").textContent = data.contact.email;
    document.getElementById("linkedin").textContent = data.contact.linkedin;
    document.getElementById("linkedin").href = data.contact.linkedin;
    
    const skillsList = document.getElementById("skills-list");
    data.skills.forEach(skill => { let li = document.createElement("li"); li.textContent = skill; skillsList.appendChild(li); });
    
    const experienceList = document.getElementById("experience-list");
    data.experience.forEach(job => { let li = document.createElement("li"); li.textContent = `${job.position} at ${job.company} (${job.years})`; experienceList.appendChild(li); });
    
    const projectsList = document.getElementById("projects-list");
    data.projects.forEach(project => { let li = document.createElement("li"); li.innerHTML = `<strong>${project.name}</strong>: ${project.description}`; projectsList.appendChild(li); });
}).catch(error => console.error("Error loading resume data:", error));