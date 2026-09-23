const passingScore = 75;
const maxAbsences = 3;
const totalStudents = 5;
let totalPassed = 0;

const studentNames = ["Theo", "Dasal", "Ella",];
const studentScores = [88, 65, 92, 78, 59];
const studentAbsences = [1, 4, 0, 2, 1];

const studentStatuses = [];

for (let i = 0; i < totalStudents; i++) {
    let status = "";

    if (studentScores[i] >= passingScore) {
        if (studentAbsences[i] <= maxAbsences) {
            status = "✅ PASSED (Good Standing)";
            totalPassed++;
        } else {
            status = "⚠️ PASSED (Too many absences)";
        }
    } else {
        status = "❌ FAILED (Below passing score)";
    }

    studentStatuses.push(status);
}

console.log("===== STUDENT REPORT =====");
let index = 0;

while (index < studentNames.length) {
    console.log(`${studentNames[index]} | Score: ${studentScores[index]} | Absences: ${studentAbsences[index]} | ${studentStatuses[index]}`);
    index++;
}

console.log("\n===== CLASS SUMMARY =====");
let passedWithPerfectAttendance = 0;

for (const abs of studentAbsences) {
    if (abs === 0) {
        passedWithPerfectAttendance++;
    }
}

console.log(`Total Students: ${totalStudents}`);
console.log(`Passing Score: ${passingScore}`);
console.log(`Students Passed: ${totalPassed}`);
console.log(`Students with Perfect Attendance: ${passedWithPerfectAttendance}`);

if (totalPassed >= totalStudents / 2) {
    console.log("\n📊 Class Performance: ABOVE AVERAGE");
} else {
    console.log("\n📊 Class Performance: BELOW AVERAGE");
}