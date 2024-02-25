let value;
let isDarkMode = false;

document.getElementById("cr_code").addEventListener("input", () => {
  value = document.getElementById("cr_code").value;
});

document.getElementById("cr_code").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    generateQrcode();
  }
});

const generateQrcode = () => {
  if (value && value.length > 0) {
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
    document.getElementById("img").src = qrCodeUrl;
    document.getElementById("img").style.borderRadius = "0px";
  }
};

const toggleMode = () => {
  isDarkMode = !isDarkMode;

  const modeButton = document.querySelector(".mode-button");
  modeButton.innerHTML = isDarkMode ? "Light Mode" : "Dark Mode";

  document.body.style.backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";
  document.body.style.color = isDarkMode
    ? "white"
    : "var(--background-color-light)";
  document.body.style.color = isDarkMode
    ? "var(--text-color-dark)"
    : "var(--text-color-light)";
  document.querySelector(".container").style.backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";
  document.querySelector(".container").style.border = isDarkMode
    ? "2px solid green"
    : "var(--background-color-light)";
  document.getElementById("cr_code").style.backgroundColor = isDarkMode
    ? "var(--input-background-dark)"
    : "var(--input-background-light)";
  document.getElementById("cr_code").style.color = isDarkMode
    ? "var(--text-color-dark)"
    : "var(--text-color-light)";
  document.getElementById("cr_code").style.borderColor = isDarkMode
    ? "var(--input-border-dark)"
    : "var(--input-border-light)";
  document.getElementsByTagName("label").style.color = isDarkMode
    ? "white"
    : "black";
};
