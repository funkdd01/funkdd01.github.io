$("#email").on("click", function() {
    if (this.className.includes("hidden")) {
        this.classList.replace("hidden", "shown");
        this.textContent = "funkdd@mail.uc.edu";
    }
    else {
        this.classList.replace("shown", "hidden");
        this.textContent = "[Click to show email]";
    }
})