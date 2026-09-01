const messages = document.getElementById("messages");
const input = document.getElementById("userInput");


function addMessage(text, type) {

    const message = document.createElement("div");

    message.className = "message " + type;

    message.innerHTML = text;

    messages.appendChild(message);

    messages.scrollTop = messages.scrollHeight;
}


function getReply(question) {

    const q = question.toLowerCase();


    /* GREETING */

    if (
        q.includes("hi") ||
        q.includes("hello") ||
        q.includes("hey") ||
        q.includes("vanakkam")
    ) {

        if (
            q.includes("vanakkam") ||
            q.includes("bro")
        ) {

            return `
                Vanakkam bro! 👋<br><br>

                Naan SUNO AI.
                Enna information venum?<br><br>

                Admission, courses, fees,
                placements, hostel or campus
                pathi kekalam.
            `;

        }

        return `
            Hello! 👋<br><br>

            I'm SUNO AI.
            How can I help you with your
            college enquiry?
        `;
    }


    /* COURSE */

    if (
        q.includes("course") ||
        q.includes("courses") ||
        q.includes("department") ||
        q.includes("branch") ||
        q.includes("it course")
    ) {

        if (
            q.includes("iruka") ||
            q.includes("irukku") ||
            q.includes("available")
        ) {

            return `
                Aama! 👍 Information Technology
                course available.<br><br>

                IT-la programming, web development,
                databases and modern technologies
                learn pannalam.<br><br>

                Vera course details venuma?
            `;

        }

        return `
            SUNO AI-la currently demo courses:<br><br>

            • Information Technology<br>
            • Computer Engineering<br>
            • Electronics<br>
            • Mechanical<br><br>

            Particular course name sonna,
            adhoda details explain panren.
        `;
    }


    /* ADMISSION */

    if (
        q.includes("admission") ||
        q.includes("apply") ||
        q.includes("join") ||
        q.includes("application")
    ) {

        return `
            Sure! 😊 Admission process simple-ah
            follow pannalam:<br><br>

            1️⃣ Eligibility check pannunga<br>
            2️⃣ Required documents ready pannunga<br>
            3️⃣ Application submit pannunga<br>
            4️⃣ Admission formalities complete pannunga<br><br>

            Exact college-specific details
            later add pannalam.
        `;
    }


    /* FEES */

    if (
        q.includes("fee") ||
        q.includes("fees") ||
        q.includes("cost") ||
        q.includes("amount")
    ) {

        return `
            Fees course and college-ku
            depend aagum. 💰<br><br>

            Fee details-la tuition fee,
            examination fee, hostel fee and
            transport fee add pannalam.<br><br>

            Exact fee amount-ku actual
            college data connect pannanum.
        `;
    }


    /* PLACEMENT */

    if (
        q.includes("placement") ||
        q.includes("job") ||
        q.includes("career") ||
        q.includes("company")
    ) {

        return `
            Placement pathi kekuringala? 🚀<br><br>

            Students-ku aptitude,
            technical, communication and
            interview training provide pannalam.<br><br>

            Actual company names and placement
            statistics later add pannalam.
        `;
    }


    /* HOSTEL */

    if (
        q.includes("hostel") ||
        q.includes("room") ||
        q.includes("stay")
    ) {

        return `
            Hostel information-la room facilities,
            food, fees, rules and accommodation
            details add pannalam. 🏠<br><br>

            Exact hostel details college data
            connect pannumbodhu show pannalam.
        `;
    }


    /* CAMPUS */

    if (
        q.includes("campus") ||
        q.includes("facility") ||
        q.includes("facilities") ||
        q.includes("library") ||
        q.includes("lab")
    ) {

        return `
            Campus facilities-la generally:<br><br>

            📚 Library<br>
            🧪 Laboratories<br>
            🏃 Sports facilities<br>
            💻 Computer labs<br>
            🚌 Transport<br>
            🏠 Hostel<br><br>

            Your college's actual facilities
            inga customize pannalam.
        `;
    }


    /* SUNO AI */

    if (
        q.includes("what is suno") ||
        q.includes("what is suno ai") ||
        q.includes("what is this") ||
        q.includes("suno ai")
    ) {

        return `
            SUNO AI is a Smart University &
            College Enquiry AI. 🤖<br><br>

            Students can ask about courses,
            admissions, fees, placements,
            departments and campus facilities.<br><br>

            English or Thanglish-la
            question kekalam.
        `;
    }


    /* THANGGLISH */

    if (
        q.includes("enna") ||
        q.includes("venum") ||
        q.includes("sollu") ||
        q.includes("sollunga") ||
        q.includes("pathi") ||
        q.includes("epdi") ||
        q.includes("iruka") ||
        q.includes("evlo")
    ) {

        return `
            Sure bro! 👍<br><br>

            Naan college-related information
            provide panna help panren.<br><br>

            Courses, admission, fees,
            placements, hostel or campus
            pathi kekalam.
        `;
    }


    /* DEFAULT */

    return `
        I'm here to help! 🤖<br><br>

        You can ask me about:<br><br>

        🎓 Courses<br>
        📝 Admissions<br>
        💰 Fees<br>
        🚀 Placements<br>
        🏠 Hostel<br>
        🏫 Campus Facilities<br><br>

        English-la or Thanglish-la
        question kekalam. 😊
    `;
}


function sendMessage() {

    const question = input.value.trim();

    if (question === "") {
        return;
    }

    addMessage(question, "user");

    input.value = "";


    setTimeout(() => {

        const reply = getReply(question);

        addMessage(reply, "bot");

    }, 500);
}


function askQuestion(question) {

    input.value = question;

    sendMessage();
}


input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

});
