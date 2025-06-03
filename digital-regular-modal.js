document.addEventListener("DOMContentLoaded", function () {
  // You must add id="open-digital-regular-modal" to your "Become a Digital Regular" button
  const openBtn = document.getElementById("open-digital-regular-modal");
  const modal = document.getElementById("digital-regular-modal");
  const closeBtn = document.getElementById("close-digital-regular-modal");
  const form = document.getElementById("digital-regular-form");
  const successMsg = document.getElementById("digital-regular-modal-success");

  if (!openBtn || !modal || !closeBtn || !form) return;

  function openModal() {
    modal.classList.add("open");
    form.style.display = "";
    successMsg.style.display = "none";
    form.reset();
  }
  function closeModal() {
    modal.classList.remove("open");
  }

  openBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Basic validation
    const name = form.elements["name"].value.trim();
    const phone = form.elements["phone"].value.trim();
    const email = form.elements["email"].value.trim();
    const city = form.elements["city"].value.trim();
    if (!name || !phone || !email || !city) {
      alert("Please fill in all required fields.");
      return;
    }
    form.style.display = "none";
    successMsg.style.display = "";
    setTimeout(closeModal, 2000);
  });
});
