// Email copy-to-clipboard with a toast, mirroring the original site behavior.
(function () {
  const toast = document.getElementById("toast");
  let hideTimer = null;

  function showToast(title, message) {
    if (!toast) return;
    toast.innerHTML = "<strong></strong><span></span>";
    toast.querySelector("strong").textContent = title;
    toast.querySelector("span").textContent = message;
    toast.classList.add("show");
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }

  document.querySelectorAll("[data-copy]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const value = el.getAttribute("data-copy");
      const done = () =>
        showToast("Email copied", value + " has been copied to your clipboard.");
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done).catch(done);
      } else {
        done();
      }
    });
  });
})();
