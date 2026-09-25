let userName = "Theo";
let userAge = 22;
let isStudent = true;
let currentScore = 95;
let semester = 1;
let courseName = "BS Computer Science";
let creditsCompleted = 45;
let hasScholarship = true;
let graduationYear = 2028;
let gpa = 1.75;

const DOB = "2004-03-15";
const SCHOOL_NAME = "Northwest Samar State University";
const MAX_SUBJECTS = 5;
const PASSING_GRADE = 3.0;
const SCHOLARSHIP_MIN_GPA = 1.5;
const TOTAL_SEMESTERS = 8;
const TUITION_FEE = 15000;
const LOCATION = "Calbayog City";
const DEPARTMENT = "College of Computing and Information Sciences";
const LANGUAGE = "JavaScript";

const calculateTotal = (a, b) => a + b;
const isEligible = (gpa) => gpa <= SCHOLARSHIP_MIN_GPA;
const formatName = (first, last) => `${first} ${last}`;
const squareNumber = (num) => num * num;
const getFullStatus = (status) => status ? "Active" : "Inactive";

const msg1 = `Hello, ${userName}! Welcome to ${SCHOOL_NAME}.`;
const msg2 = `You are ${userAge} years old, born on ${DOB}.`;
const msg3 = `Course: ${courseName}, Year: ${graduationYear}`;
const msg4 = `Current GPA: ${gpa} — ${isEligible(gpa) ? "Scholarship eligible" : "Not eligible"}`;
const msg5 = `Completed ${creditsCompleted} credits out of ${MAX_SUBJECTS * 3} total.`;
const msg6 = `Location: ${LOCATION}, Department: ${DEPARTMENT}`;
const msg7 = `Total cost: ₱${TUITION_FEE.toLocaleString()}`;
const msg8 = `Semester ${semester} of ${TOTAL_SEMESTERS}`;
const msg9 = `Passing grade requirement: ${PASSING_GRADE}`;
const msg10 = `Programming language used: ${LANGUAGE}`;

const grades = [1.25, 1.50, 1.75, 2.00, 2.25];
const [g1, g2, g3, ...restGrades] = grades;

const schedule = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const [mon, tue, wed] = schedule;

const scores = [98, 92, 87, 95];
const [ProgrammingLanguages, AutomataTheory, SoftwareEngineering, ProfessionalElective] = scores;

const student = {
  first: "Theo",
  last: "Lustico",
  age: 22,
  course: "BSCS"
};
const { first, last, age } = student;

const academic = {
  yearLevel: 2,
  semester: 1,
  gpa: 1.75,
  honors: "Dean's List"
};
const { yearLevel, honors } = academic;

const contact = {
  email: "theo@example.com",
  phone: "09380366504",
  address: "Calbayog City"
};
const { email: studentEmail, address } = contact;

const firstHalf = [10, 20, 30];
const secondHalf = [40, 50, 60];
const fullList = [...firstHalf, ...secondHalf];

const basics = ["HTML", "CSS", "JavaScript"];
const advanced = ["React", "Node.js", "Express"];
const allTechStack = [...basics, ...advanced];

const personalInfo = { name: "Theo", age: 22 };
const academicInfo = { course: "BSCS", year: 2 };
const fullProfile = { ...personalInfo, ...academicInfo };

const baseSettings = { theme: "light", fontSize: 14 };
const customSettings = { fontSize: 16, darkMode: false };
const finalSettings = { ...baseSettings, ...customSettings };

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

const subjects = ["Programming Languages", "Automata Theory", "Software Engineering", "Professional Elective"];
const subjectCodes = subjects.map(subj => `SUB-${subj.toUpperCase()}`);

const gradeList = [1.25, 3.0, 1.75, 4.0, 2.5, 1.0];
const passingGrades = gradeList.filter(g => g <= PASSING_GRADE);

const studentList = [
  { name: "Theo", scholar: true },
  { name: "Jean", scholar: false },
  { name: "Ella", scholar: true },
  { name: "Jenny", scholar: false }
];
const scholars = studentList.filter(s => s.scholar);

const studentData = {
  profile: {
    name: "Theo Lustico",
    contact: {
      email: "theo@example.com"
    }
  }
};
const phoneNumber = studentData?.profile?.contact?.phone ?? "No phone number provided";
const studentEmailAddress = studentData?.profile?.contact?.email ?? "No email provided";

const courseDetails = {
  name: "BSCS",
  subjects: {
    major: ["JavaScript", "Java", "Python"]
  }
};
const minorSubjects = courseDetails?.subjects?.minor ?? "No minor subjects listed";
const firstMajor = courseDetails?.subjects?.major?.[0] ?? "No major subjects";

console.log("=== ACTIVITY 1.3 OUTPUT ===\n");
console.log("1. Let variables sample:", { userName, courseName, gpa });
console.log("2. Const variables sample:", { SCHOOL_NAME, MAX_SUBJECTS });
console.log("3. Arrow function result - calculateTotal(5, 10):", calculateTotal(5, 10));
console.log("4. Template literal sample:", msg1);
console.log("5. Destructured arrays sample:", { g1, tue, math });
console.log("6. Destructured objects sample:", { first, yearLevel, studentEmail });
console.log("7. Spread arrays:", fullList, allTechStack);
console.log("8. Spread objects:", fullProfile, finalSettings);
console.log("9. .map() results:", doubled, subjectCodes);
console.log("10. .filter() results:", passingGrades, scholars.map(s => s.name));
console.log("11. Optional chaining results:", { phoneNumber, minorSubjects, firstMajor });