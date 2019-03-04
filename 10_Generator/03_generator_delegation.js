const lionClass = {
  chineseTeacher: "Sunny",
  englishTeacher: "Carlin",
  students: ["Cindy", "Lucas", "Sophie"]
};

const kangarooClass = {
  chineseTeacher: "Rebecca",
  englishTeacher: "Ben",
  students: ["Sunny", "Paul", "Sophia"]
};

const school = {
  president: "Stacy",
  lionClass,
  kangarooClass
};

const classTeacherIterator = function*(clazz) {
  yield clazz.chineseTeacher;
  yield clazz.englishTeacher;
};

for (let teacher of classTeacherIterator(lionClass)) {
  console.log(teacher);
}
// Sunny
// Carlin

for (let teacher of classTeacherIterator(kangarooClass)) {
  console.log(teacher);
}
// Rebecca
// Ben

const schoolTeacherIterator = function*(school) {
  yield school.president;
  const lionClassTeachers = classTeacherIterator(school.lionClass);
  yield* lionClassTeachers;
  // yield lionClassTeachers;
  const kangarooClassTeachers = classTeacherIterator(school.kangarooClass);
  yield* kangarooClassTeachers;
};

for (let teacher of schoolTeacherIterator(school)) {
  console.log(teacher);
}
// Stacy
// Sunny
// Carlin
// Rebecca
// Ben
