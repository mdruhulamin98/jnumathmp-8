/**
 * JNU Math MSc Batch-8 Dynamic Engine
 * This script handles all content rendering via JavaScript
 */

const teachersData = [
    { name: "Ayub Sir (Professor)", subject: "Lattice Theory & Boolean Algebra", img: "https://cdn-icons-png.flaticon.com/512/180/180693.png", link: "Dr. Md. Ayub Ali.html" },
    { name: "MD. ASRAFUL ISLAM (Asst. Professor)", subject: "Dynamical Systems", img: "https://jrp.jnu.ac.bd/emp_pics_nids/photo_10763.jpg", link: "MD. ASRAFUL ISLAM.html" },
    { name: "Dr. Sidhartha Bhowmick (Professor)", subject: "Advanced Numerical Analysis", img: "https://jrp.jnu.ac.bd/emp_pics_nids/photo_10358.jpg", link: "Dr. Sidhartha Bhowmick.html" },
    { name: "DR. SHARABAN THOHURA (Professor)", subject: "Advanced Mathematical Methods", img: "https://jrp.jnu.ac.bd/emp_pics_nids/photo_10314.jpg", link: "Dr. Sharaban Thohura.html" },
    { name: "Dr. Md. Sarwar Alam (Professor)", subject: "Fluid Dynamics and Heat Transfer", img: "https://jrp.jnu.ac.bd/emp_pics_nids/photo_10191.jpg", link: "Dr. Md. Sarwar Alam.html" },
    { name: "Dr. Md. Shariful Alam (Professor)", subject: "Biomathematics", img: "https://jrp.jnu.ac.bd/emp_pics_nids/photo_10358.jpg", link: "Dr. Md. Shariful Alam.html" }
];

const noticeData = [
    { title: "Announcements", link: "https://drive.google.com/drive/folders/10_CVz__5Zq1V3L8xXFLxZwe5zqnrmJVe?usp=sharing" },
    { title: "Exam Schedule", link: "https://drive.google.com/drive/folders/1Yp5KPLXilwA8de_cLWTO7mla8jgCru8o?usp=sharing" },
    { title: "Result", link: "https://drive.google.com/drive/folders/1jVqKKha0O452tm3GeWWPK_mnbRPY5eaj?usp=sharing" },
    { title: "Syllabus", link: "https://drive.google.com/drive/folders/1ZVGdtVNO0ZOSRYh8kwEC4__XbUmkPIpi?usp=sharing" },
    { title: "Class Notes", link: "https://drive.google.com/drive/folders/1tY9I0J4qJUu4RGF-31_pVnO_RC3JtAlr?usp=sharing" }
];

// Function to Render Teachers
function initApp() {
    const teacherGrid = document.getElementById('teacher-grid');
    const noticeGrid = document.getElementById('notice-grid');

    // Load Teachers
    teachersData.forEach(teacher => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <a href="${teacher.link}" class="teacher-link">
                <img src="${teacher.img}" alt="${teacher.name}">
                <h2>${teacher.subject}</h2>
                <span>Instructor: ${teacher.name}</span>
            </a>
        `;
        teacherGrid.appendChild(card);
    });

    // Load Notices
    noticeData.forEach(notice => {
        const nLink = document.createElement('a');
        nLink.href = notice.link;
        nLink.className = 'notice';
        nLink.innerText = notice.title;
        noticeGrid.appendChild(nLink);
    });

    console.log("JS.ORG: Logic initialized successfully.");
}

// Start rendering when page loads
window.onload = initApp;
