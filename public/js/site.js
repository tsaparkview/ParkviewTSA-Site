var button = document.querySelector(".menu-button");
var nav = document.getElementById("site-nav");

// hamburger open/close
button.addEventListener("click", function () {
  var open = nav.classList.toggle("open");
  button.setAttribute("aria-expanded", open ? "true" : "false");
});

// dropdowns (Chapter Life / More)
function closeDrops(except) {
  document.querySelectorAll(".nav li.has-drop").forEach(function (li) {
    if (li !== except) {
      li.classList.remove("open");
      li.querySelector(".drop-toggle").setAttribute("aria-expanded", "false");
    }
  });
}
document.querySelectorAll(".nav .drop-toggle").forEach(function (t) {
  t.addEventListener("click", function (e) {
    e.stopPropagation();
    var li = t.parentElement;
    var open = li.classList.toggle("open");
    t.setAttribute("aria-expanded", open ? "true" : "false");
    closeDrops(li);
  });
});

// click elsewhere or press Esc to close
document.addEventListener("click", function () { closeDrops(null); });
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeDrops(null);
    nav.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
  }
});
