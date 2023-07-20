document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");
  const countButton = document.getElementById("countButton");
  const upperButton = document.getElementById("upperButton");
  const lowerButton = document.getElementById("lowerButton");
  const capitalizeButton = document.getElementById("capitalizeButton");
  const removeExtraSpacesButton = document.getElementById("removeExtraSpacesButton");
  const clearButton = document.getElementById("clearButton");
  const wordCount = document.getElementById("wordCount");

  countButton.addEventListener("click", () => {
    const text = inputText.value;
    const words = text.trim().split(/\s+/).length;
    wordCount.textContent = `Word count: ${words}`;
  });

  upperButton.addEventListener("click", () => {
    inputText.value = inputText.value.toUpperCase();
  });

  lowerButton.addEventListener("click", () => {
    inputText.value = inputText.value.toLowerCase();
  });

  capitalizeButton.addEventListener("click", () => {
    const text = inputText.value;
    inputText.value = text.replace(/\b\w/g, (match) => match.toUpperCase());
  });

  removeExtraSpacesButton.addEventListener("click", () => {
    const text = inputText.value;
    inputText.value = text.replace(/\s+/g, " ").trim();
  });

  clearButton.addEventListener("click", () => {
    inputText.value = "";
    wordCount.textContent = "";
  });
});
