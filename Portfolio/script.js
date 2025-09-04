
(function() {
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  if (stored === "light") root.classList.add("light");

  const btn = document.getElementById("themeToggle");
  btn?.addEventListener("click", () => {
    root.classList.toggle("light");
    localStorage.setItem("theme", root.classList.contains("light") ? "light" : "dark");
  });
})();


(function() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  toggle?.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links?.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });
})();


(function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", href);
      }
    });
  });
})();


document.getElementById("year").textContent = new Date().getFullYear();


function openMail(form) {
  const name = encodeURIComponent(form.name.value.trim());
  const email = encodeURIComponent(form.email.value.trim());
  const message = encodeURIComponent(form.message.value.trim());
  const subject = `Portfolio contact from ${name}`;
  const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
  window.location.href = `mailto:samyankror77@gmail.com?subject=${subject}&body=${body}`;
  return false;
}
