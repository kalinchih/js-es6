const lionClass = {
  chineseTeacher: "Sunny",
  englishTeacher: "Carlin",
  students: ["Cindy", "Lucas", "Sophie"],
  [Symbol.iterator]: function*() {
    yield this.chineseTeacher;
    yield this.englishTeacher;
  }
};

const kangarooClass = {
  chineseTeacher: "Rebecca",
  englishTeacher: "Ben",
  students: ["Sunny", "Paul", "Sophia"],
  [Symbol.iterator]: function*() {
    yield this.chineseTeacher;
    yield this.englishTeacher;
  }
};

const school = {
  president: "Stacy",
  lionClass,
  kangarooClass,
  [Symbol.iterator]: function*() {
    yield* this.lionClass;
    yield* this.kangarooClass;
  }
};

//console.log(school);
for (let teacher of school) {
  console.log(teacher);
}
