// Course data array
const courses = [
    { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, subject: "wdd", completed: true },
    { code: "CSE 110", name: "Introduction to Programming", credits: 2, subject: "cse", completed: true },
    { code: "WDD 230", name: "Web Frontend Development I", credits: 2, subject: "wdd", completed: false },
    { code: "WDD 231", name: "Web Frontend Development II", credits: 2, subject: "wdd", completed: false },
    { code: "CIT 160", name: "Programming Building Blocks", credits: 2, subject: "cit", completed: true },
    { code: "CSE 111", name: "Programming with Functions", credits: 2, subject: "cse", completed: true },
    { code: "CSE 210", name: "Programming with Classes", credits: 2, subject: "cse", completed: true }
];

// DOM elements
const courseList = document.querySelector('.course-list');
const filterButtons = document.querySelectorAll('.filter-btn');
const totalCredits = document.getElementById('total-credits');
const menuButton = document.getElementById('menu-button');
const primaryNav = document.getElementById('primary-nav');

// Display courses
function displayCourses(filter = 'all') {
    courseList.innerHTML = '';
    
    const filteredCourses = filter === 'all' 
        ? courses 
        : courses.filter(course => course.subject === filter);
    
    filteredCourses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.className = `course-item ${course.completed ? 'completed' : ''}`;
        courseItem.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.name}</p>
            <p>Credits: ${course.credits}</p>
            ${course.completed ? '<p class="completed-text">✓ Completed</p>' : ''}
        `;
        courseList.appendChild(courseItem);
    });
    
    updateTotalCredits(filteredCourses);
}

// Update total credits
function updateTotalCredits(filteredCourses) {
    const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCredits.textContent = total;
}

// Filter button event listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displayCourses(button.dataset.filter);
    });
});

// Mobile menu toggle
menuButton.addEventListener('click', () => {
    primaryNav.classList.toggle('show');
});

// Display current year and last modified date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Initial load
displayCourses();
/// by Joyce Achen