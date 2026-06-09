// Set up analog clock
let clock = $("#analog-clock")[0];
let ctx = clock.getContext("2d");
let radius = clock.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.9;
setInterval(function analog_clock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
    return analog_clock;
}(), 1000);

// Digital clock
setInterval(function digitalClock() {
    let now = new Date()
    $("#digital-clock").html(`${String(now.getHours() % 12 || 12).padStart(2, 0)}:${String(now.getMinutes()).padStart(2, 0)}:${String(now.getSeconds()).padStart(2, 0)}`);
    return digitalClock;
}(), 1000)

// Dark Mode
function toggleDark() {
    $("body").attr("class") == "light" ? $("body").removeClass("light").addClass("dark") : $("body").removeClass("dark").addClass("light"); 
}