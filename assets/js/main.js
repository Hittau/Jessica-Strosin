if (!localStorage.theme) localStorage.theme = "light";
document.body.className = localStorage.theme

document.querySelectorAll(".check").forEach(el => {
    el.onchange = () => localStorage.setItem(el.id, el.checked);
    el.checked = localStorage.getItem(el.id) === "true";
});

sliderThemeBtn.onclick = () => {
    document.body.classList.toggle('dark');
    localStorage.theme = document.body.className || "light";
};
