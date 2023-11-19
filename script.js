document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('loaded');

    var buttons = document.querySelectorAll(".select");
    var cards = document.querySelectorAll(".item");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            var selected = button.name;
            cards.forEach(card => {
                if (selected === "all") {
                    card.style.display = "block";
                } else if (card.classList.contains(selected)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});
