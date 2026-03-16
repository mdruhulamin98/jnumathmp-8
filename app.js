/**
 * JNU Math MSc Batch-8 Complete Dynamic Engine
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

// আপনার কন্টাক্ট এবং ডেভেলপার ডাটা
const contactInfo = {
    email: "info@college.edu",
    whatsapp: "#",
    facebook: "#",
    developer: {
        name: "Md RuhuL AmiN",
        img: "Developer.jpeg"
    }
};

function initApp() {
    // ১. শিক্ষকদের কার্ড লোড করা
    const teacherGrid = document.getElementById('teacher-grid');
    if(teacherGrid) {
        teachersData.forEach(teacher => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <a href="${teacher.link}" class="teacher-link">
                    <img src="${teacher.img}" alt="${teacher.name}">
                    <h2>${teacher.subject}</h2>
                    <span>Instructor: ${teacher.name}</span>
                </a>`;
            teacherGrid.appendChild(card);
        });
    }

    // ২. নোটিশ লোড করা
    const noticeGrid = document.getElementById('notice-grid');
    if(noticeGrid) {
        noticeData.forEach(notice => {
            const nLink = document.createElement('a');
            nLink.href = notice.link;
            nLink.className = 'notice';
            nLink.innerText = notice.title;
            noticeGrid.appendChild(nLink);
        });
    }

    // ৩. কন্টাক্ট ও ডেভেলপার সেকশন লোড করা (আপনার index.html এ যদি নিচের আইডিগুলো থাকে)
    const footerContact = document.querySelector('.contact-box');
    if(footerContact) {
        footerContact.innerHTML = `
            <div>
                <h3>Contact Us</h3>
                <p>${contactInfo.email}</p>
                <p><a href="${contactInfo.whatsapp}" style="color:white;text-decoration:none;">WhatsApp</a></p>
                <p><a href="${contactInfo.facebook}" style="color:white;text-decoration:none;">Facebook</a></p>
            </div>
            <div class="Developer-container">
                <img src="${contactInfo.developer.img}" alt="Profile Photo" style="width:70px; border-radius:50%;">
                <h1 style="font-size:20px; color:white;">Developer by ${contactInfo.developer.name}</h1>
            </div>`;
    }

    console.log("JS.ORG Verification: All modules loaded via JavaScript.");
}

window.onload = initApp;
