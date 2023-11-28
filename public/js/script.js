let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    let panel = this.nextElementSibling;
    if (panel.style.display === "none") {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
  });
}

let activity = document.getElementsByClassName("activity")

for (let i = 0; i < activity.length; i++) {
  activity[i].addEventListener("click", function() {
    this.classList.toggle("active")
  })
}