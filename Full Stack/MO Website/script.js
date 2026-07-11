const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

const saved = localStorage.getItem("theme") || "light";

if (saved === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    toggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    localStorage.setItem("theme", "light");
  }
});
