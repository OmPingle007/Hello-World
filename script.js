script
const recentItems = [
  { name: "Blue Backpack", status: "Lost" },
  { name: "Black Wallet", status: "Found" },
  { name: "Red Water Bottle", status: "Lost" }
];

// Load recent items
window.onload = () => {
  const list = document.getElementById("recentList");
  if (list) {
    recentItems.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} (${item.status})`;
      list.appendChild(li);
    });
  }
};

// Basic login simulation
document.getElementById("loginForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const id = document.getElementById("collegeID").value;
  const pw = document.getElementById("password").value;
  if (id === "12345" && pw === "password") {
    alert("Login successful!");
    // Redirect or update UI as needed
  } else {
    alert("Invalid credentials.");
  }
});
