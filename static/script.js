const tabButtons = document.querySelectorAll(".tab");
const tabContents = {
  0: document.getElementById("wallet-content"),
  1: document.getElementById("save-content"),
  2: document.getElementById("borrow-content"),
  3: document.getElementById("grow-content"),
};
tabButtons.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Remove active styles from all tabs
    tabButtons.forEach((t) => {
      t.classList.remove("bg-[#0052ff]", "text-white", "rounded-t-xl");
      t.classList.add("bg-white", "text-[#0a2e79]");
    });

    // Hide all content sections
    Object.values(tabContents).forEach((content) => {
      if (content) content.classList.add("hidden");
    });

    // Add active styles to clicked tab
    tab.classList.add("bg-[#0052ff]", "text-white", "rounded-t-xl");
    tab.classList.remove("bg-white", "text-[#0a2e79]");

    // Show corresponding content
    const activeContent = tabContents[index];
    if (activeContent) activeContent.classList.remove("hidden");
  });
});
