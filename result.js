const result = JSON.parse(
    localStorage.getItem("quizResult")
);


// Agar result data nahi mila
if (!result) {

    document.body.innerHTML = `
        <h2>No quiz result found.</h2>
    `;

} else {

    document.getElementById("totalQuestions").textContent =
        result.totalQuestions;


    document.getElementById("attempted").textContent =
        result.attempted;


    document.getElementById("skipped").textContent =
        result.skipped;


    // Start aur End time ko Date object me convert karo
    const start = new Date(result.startTime);
    const end = new Date(result.endTime);


    // Date + Time formatting function
    function formatDateTime(date) {

        const months = [
            "Jan", "Feb", "Mar", "Apr",
            "May", "Jun", "Jul", "Aug",
            "Sep", "Oct", "Nov", "Dec"
        ];

        const day = String(date.getDate()).padStart(2, "0");

        const month = months[date.getMonth()];

        const year = date.getFullYear();

        let hours = date.getHours();

        const minutes = String(
            date.getMinutes()
        ).padStart(2, "0");

        const ampm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12;

        hours = hours || 12;


        return `${day} ${month} ${year} ${hours}:${minutes} ${ampm}`;
    }


    // Start time show
    document.getElementById("startTime").textContent =
        formatDateTime(start);


    // End time show
    document.getElementById("endTime").textContent =
        formatDateTime(end);
}