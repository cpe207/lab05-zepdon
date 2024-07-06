// ปุญณพัฒน์ ภาณุมนต์วาที 640610692

// define interface for Student object
/* Your code here */
interface Student {
  name: string;
  score: number;
}

// assign interface/type to the function definition properly
function findTopNames(students:Student[]) {
  /* Your code here */
  const pass = students
  .filter((std) => std.score > 8)
  .map((std) =>std.name);
  return pass;
}

// assign interface/type to the student1 object properly
const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;
