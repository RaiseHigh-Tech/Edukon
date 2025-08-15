document.addEventListener("DOMContentLoaded", () => {
    // Sample course list
    const courses = [
        "Figma Masterclass",
        "Adobe XD Basics",
        "Illustration for Beginners",
        "Photoshop Advanced",
        "Web Development Bootcamp",
        "JavaScript Essentials"
    ];

    const searchInput = document.querySelector("input[placeholder='Keywords of your course']");
    const searchBtn = document.getElementById("search-btn");

    // Search button click
    searchBtn.addEventListener("click", () => {
        const keyword = searchInput.value.trim().toLowerCase();

        if (!keyword) {
            alert("Please enter a course keyword");
            return;
        }

        const results = courses.filter(course => course.toLowerCase().includes(keyword));

        if (results.length > 0) {
            alert(`Found courses:\n- ${results.join("\n- ")}`);
        } else {
            alert("No courses found for your keyword.");
        }
    });

    // Popular tag click
    document.querySelectorAll(".popular-tag").forEach(tag => {
        tag.addEventListener("click", (e) => {
            e.preventDefault(); // prevent page jump
            searchInput.value = tag.textContent;
            searchBtn.click();
        });
    });
});
