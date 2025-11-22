
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });
    }

    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});


// filter
document.addEventListener("DOMContentLoaded", () => {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".note-card");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const filter = btn.dataset.filter;

            // update active button
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            cards.forEach(card => {
                const subject = card.dataset.subject;

                if (filter === "all" || filter === subject) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

});




// adscript
function redirectWithAd(id, mainUrl, adUrl) {
    let count = sessionStorage.getItem(id) || 0;
    count = Number(count) + 1;
    sessionStorage.setItem(id, count);

    if (count === 1) {
        // First click (per reload) → show ad
        window.open(adUrl, "_blank");
    } else {
        // Second+ click → main content
        window.open(mainUrl, "_blank");
    }
}
