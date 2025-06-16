const form = document.getElementById("guest-form");
const guestInput = document.getElementById("guest-name");
const guestList = document.getElementById("guest-list");

let guestCount = 0;
const MAX_GUESTS = 10;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = guestInput.value.trim();

  if (!name) return;

  if (guestCount >= MAX_GUESTS) {
    alert("Guest limit reached!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = name;

  // Toggle RSVP
  const rsvpBtn = document.createElement("button");
  rsvpBtn.textContent = "Attending";
  rsvpBtn.addEventListener("click", () => {
    rsvpBtn.textContent = rsvpBtn.textContent === "Attending" ? "Not Attending" : "Attending";
  });

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    li.remove();
    guestCount--;
  });

  li.appendChild(rsvpBtn);
  li.appendChild(removeBtn);
  guestList.appendChild(li);

  guestCount++;
  guestInput.value = "";
});
const time = new Date().toLocaleTimeString();

li.textContent = `${name} (${category}) - Added at ${time}`;
const editBtn = document.createElement("button");
editBtn.textContent = "Edit";
editBtn.addEventListener("click", () => {
  const newName = prompt("Enter new name:", name);
  if (newName) {
    name = newName;
    li.firstChild.textContent = `${name} (${category}) - Added at ${time}`;
  }
});
const searchBox = document.getElementById("search-box");

searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();
  const guests = guestList.getElementsByTagName("li");

  Array.from(guests).forEach(guest => {
    guest.style.display = guest.textContent.toLowerCase().includes(query)
      ? ""
      : "none";
  });
});