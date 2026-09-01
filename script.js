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
        q.includes("vanakkam")
    ) {
        return `
            Hi 👋 I'm SUNO AI.<br><br>
            Enna information venum?<br>
            Admission, courses, fees, departments,
            placements or hostel pathi kekalam.
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
            Course-specific admission details-ku
            college admission office-a contact pannunga.
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
            IT course-la programming, web development,
            databases, networking and modern IT technologies
            pathi learn pannalam.
        `;
    }


    // Computer Engineering
    if (
        q.includes("computer engineering") ||
        q.includes("computer course")
    ) {
        return `
            <b>Computer Engineering</b><br><br>
            Computer Engineering-la programming,
            software development, computing and
            software engineering concepts cover pannuvanga.
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
            Electronics course-la electronics,
            embedded systems, IoT and related technologies
            pathi learn pannalam.
        `;
    }


    // Mechanical
    if (
        q.includes("mechanical")
    ) {
        return `
            <b>Mechanical Engineering</b><br><br>
            Mechanical-la machines, manufacturing,
            engineering design and mechanical systems
            pathi learn pannalam.
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
            Course and admission category based on fees
            change aagalam.<br><br>
            Exact fees-ku college admission office-a
            contact pannunga.
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
            Hostel facility details college-wise
            vary aagalam. Exact availability,
            fees and facilities-ku college office-a
            contact pannunga.
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
            More details-ku Courses section check pannunga.
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
            College facilities, campus information,
            departments and student services pathi
            SUNO AI-la enquiry pannalam.
        `;
    }


    // Thank you
    if (
        q.includes("thank") ||
        q.includes("thanks")
    ) {
        return `
            You're welcome! 😊<br><br>
            Innum edhavadhu college-related question
            irundha kekalam.
        `;
    }


    // Default answer
    return `
        I'm SUNO AI 👋<br><br>
        Indha question-ku specific information
        en database-la available illa.<br><br>
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
