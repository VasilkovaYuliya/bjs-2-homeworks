function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
};

let first = new Student("Аня", "женский", 26);
let second = new Student("Миша", "мужской", 33);
let third = new Student("Соня", "женский", 29);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
};

first.setSubject('Физика');

Student.prototype.addMarks = function (...marksToAdd) {
  if (this.marks === undefined){ 
    console.log('Студент отчислен');
    return;
    } 
    this.marks.push(...marksToAdd);
}
first.addMarks(5,3,9);

Student.prototype.getAverage = function () {
  if (this.marks === undefined || this.marks.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let mark of this.marks){
    sum += mark;
  }
  return sum / this.marks.length;
}
first.getAverage();

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
first.exclude();
