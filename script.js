
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "☀️ Light Mode";
  } else {
    themeButton.textConten
const reminders = [
  "Trust Allah, even when you cannot see the whole path.",
  "Make dua and leave the result to Allah.",
  "Allah knows what is best for you.",
  "Do not lose hope in Allah's mercy.",
  "Take a moment today to remember Allah.",
  "Be grateful for the blessings you already have.",
  "A difficult day does not mean a difficult life.",
  "Keep your heart connected to Allah.",
  "Be patient; good things take time.",
  "Turn to Allah whenever your heart feels heavy."
];

let reminderIndex = 0;

const reminderContainer = document.getElementById("reminder-container");
const nextReminderButton = document.getElementById("next-reminder");

function showReminder() {
  reminderContainer.innerHTML = `
    <div class="reminder">
      <p>${reminders[reminderIndex]}</p>
    </div>
  `;
}

showReminder();

nextReminderButton.addEventListener("click", function () {
  reminderIndex = (reminderIndex + 1) % reminders.length;
  showReminder();
});
