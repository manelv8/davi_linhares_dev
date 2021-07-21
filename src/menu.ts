const menuIcon = document.querySelector("#menu-icon");
const menuActions = document.querySelector("#menu-actions")

menuIcon?.addEventListener('click', () => {
  menuActions?.classList.toggle("show");
})
