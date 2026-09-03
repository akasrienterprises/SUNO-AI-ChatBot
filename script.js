// ================= SUNO AI CHAT =================

const input = document.getElementById("userInput");
const messages = document.getElementById("messages");

// Send message when Enter is pressed
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});


// ================= SEND MESSAGE =================

function sendMessage() {

    const question = input.value.trim();

    if (question === "") {
        return;
    }

    // Show user message
    addMessage(question, "user");

    // Clear input
    input.value = "";

    // Small delay like real AI
    setTimeout(function () {

        const answer = getAnswer(question);

        addMessage(answer, "bot");

    }, 500);
}


// ================= QUICK QUESTIONS =================

function askQuestion(question) {

    input.value = question;

    sendMessage();
}


// ================= ADD MESSAGE =================

function addMessage(text, type) {

    const message = document.createElement("div");

    message.classList.add("message", type);

    message.innerHTML = text;

    messages.appendChild(message);

    // Scroll to latest message
    messages.scrollTop = messages.scrollHeight;
}


// ================= AI ANSWERS =================

function getAnswer(question) {

    const q = question.toLowerCase().trim();


    // Greeting
    if (
        q.includes("hi") ||
        q.includes("hello") ||
        q.includes("hey") ||
        q.includes("greetings")
    ) {
        return `
            Hi 👋 I'm SUNO AI.<br><br>
            What information do you need?<br>
            You can ask about admissions, courses, fees, departments,
            placements, hostel, or campus facilities.
        `;
    }


    // Admission
    if (
        q.includes("admission") ||
        q.includes("apply") ||
        q.includes("join")
    ) {
        return `
            <b>Admission Process</b><br><br>
            1. Check your course eligibility.<br>
            2. Prepare the required documents.<br>
            3. Submit the admission application.<br>
            4. Complete the admission formalities.<br><br>
            For course-specific admission details, please contact the college admission office.
        `;
    }


    // IT
    if (
        q.includes("it course") ||
        q.includes("information technology") ||
        q.includes("it department")
    ) {
        return `
            <b>Information Technology</b><br><br>
            The Information Technology course covers programming, web development, databases, networking, and modern IT technologies.
        `;
    }


    // Computer Engineering
    if (
        q.includes("computer engineering") ||
        q.includes("computer course")
    ) {
        return `
            <b>Computer Engineering</b><br><br>
            Computer Engineering covers programming, software development, computing, and software engineering concepts.
        `;
    }


    // Electronics
    if (
        q.includes("electronics") ||
        q.includes("ece") ||
        q.includes("iot")
    ) {
        return `
            <b>Electronics</b><br><br>
            The Electronics course covers electronics, embedded systems, IoT, and related technologies.
        `;
    }


    // Mechanical
    if (
        q.includes("mechanical")
    ) {
        return `
            <b>Mechanical Engineering</b><br><br>
            Mechanical Engineering covers machines, manufacturing, engineering design, and mechanical systems.
        `;
    }


    // Fees
    if (
        q.includes("fees") ||
        q.includes("fee") ||
        q.includes("cost")
    ) {
        return `
            <b>Fees Information</b><br><br>
            Fees may vary depending on the course and admission category.<br><br>
            For exact fees, please contact the college admission office.
        `;
    }


    // Departments
    if (
        q.includes("department") ||
        q.includes("departments")
    ) {
        return `
            <b>Departments</b><br><br>
            SUNO AI currently provides information about
            IT, Computer Engineering, Electronics and
            Mechanical courses.
        `;
    }


    // Placement
    if (
        q.includes("placement") ||
        q.includes("job") ||
        q.includes("career")
    ) {
        return `
            <b>Placement & Career</b><br><br>
            Placement training includes aptitude,
            technical skills, communication and
            interview preparation.<br><br>
            Students can also explore internships,
            projects and career opportunities.
        `;
    }


    // Hostel
    if (
        q.includes("hostel") ||
        q.includes("accommodation")
    ) {
        return `
            <b>Hostel</b><br><br>
            Hostel availability, fees, and facilities may vary. Please contact the college office for exact details.
        `;
    }


    // Course
    if (
        q.includes("course") ||
        q.includes("courses")
    ) {
        return `
            <b>Available Courses</b><br><br>
            • Information Technology<br>
            • Computer Engineering<br>
            • Electronics<br>
            • Mechanical Engineering<br><br>
            Check the Courses section for more details.
        `;
    }


    // Campus
    if (
        q.includes("campus") ||
        q.includes("facility") ||
        q.includes("facilities")
    ) {
        return `
            <b>Campus Facilities</b><br><br>
            You can ask SUNO AI about campus facilities, departments, and student services.
        `;
    }


    // Thank you
    if (
        q.includes("thank") ||
        q.includes("thanks")
    ) {
        return `
            You're welcome! 😊<br><br>You can ask another college-related question anytime.
        `;
    }


    // Default answer
    return `
        I'm SUNO AI 👋<br><br>
        I don't have specific information for that question in my current knowledge base.<br><br>
        Try asking about:<br>
        • Admission<br>
        • Courses<br>
        • Fees<br>
        • Departments<br>
        • Placements<br>
        • Hostel<br>
        • Campus facilities
    `;
}
