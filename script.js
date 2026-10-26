// One array holds all the student data.
// map() turns each student into one card's HTML, then join() puts them together.
const students = [
  { name: "Ahmed Raza",    program: "BSCS", semester: 5, skill: "HTML & CSS" },
  { name: "Fatima Noor",   program: "BSCS", semester: 5, skill: "JavaScript" },
  { name: "Ali Hamza",     program: "BSCS", semester: 5, skill: "Bootstrap" },
  { name: "Ayesha Khan",   program: "BSCS", semester: 5, skill: "SQL" },
  { name: "Usman Tariq",   program: "BSCS", semester: 5, skill: "Git & GitHub" },
  { name: "Maryam Iqbal",   program: "BSCS", semester: 5, skill: "JavaScript" }
];

function initials(name) {
  const parts = name.split(" ");
  return parts[0][0] + parts[1][0];
}

function studentCard(student) {
  return `
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="card student-card h-100 p-4 text-center">
        <div class="initials mx-auto">${initials(student.name)}</div>
        <h2 class="h5">${student.name}</h2>
        <p class="text-muted mb-1">${student.program} — Semester ${student.semester}</p>
        <p class="mb-0"><strong>Skill:</strong> ${student.skill}</p>
      </div>
    </div>`;
}

document.getElementById("student-cards").innerHTML =
  students.map(studentCard).join("");
