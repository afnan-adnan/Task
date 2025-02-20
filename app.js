let students = [
  { "id": 1, "name": "John Doe", "stage": "Grade 10", "age": 15 },
  { "id": 2, "name": "Jane Smith", "stage": "Grade 11", "age": 16 },
  { "id": 3, "name": "Alice Johnson", "stage": "Grade 12", "age": 17 },
  { "id": 4, "name": "Bob Brown", "stage": "Grade 9", "age": 14 },
  { "id": 5, "name": "Emily Davis", "stage": "Grade 11", "age": 16 },
  { "id": 6, "name": "Charlie Wilson", "stage": "Grade 10", "age": 15 },
  { "id": 7, "name": "Grace Lee", "stage": "Grade 9", "age": 14 },
  { "id": 8, "name": "David Clark", "stage": "Grade 12", "age": 17 },
  { "id": 9, "name": "Sophie Adams", "stage": "Grade 11", "age": 16 },
  { "id": 10, "name": "Michael Turner", "stage": "Grade 10", "age": 15 },
  { "id": 11, "name": "Lucas Scott", "stage": "Grade 9", "age": 14 },
  { "id": 12, "name": "Ella Thompson", "stage": "Grade 11", "age": 16 },
  { "id": 13, "name": "Benjamin Evans", "stage": "Grade 12", "age": 17 },
  { "id": 14, "name": "Olivia Green", "stage": "Grade 10", "age": 15 },
  { "id": 15, "name": "Liam Harris", "stage": "Grade 9", "age": 14 },
  { "id": 16, "name": "Sophia Lewis", "stage": "Grade 11", "age": 16 },
  { "id": 17, "name": "James Martin", "stage": "Grade 12", "age": 17 },
  { "id": 18, "name": "Mia Walker", "stage": "Grade 9", "age": 14 },
  { "id": 19, "name": "Henry Young", "stage": "Grade 10", "age": 15 },
  { "id": 20, "name": "Ava King", "stage": "Grade 11", "age": 16 }
];

let getAllStudents = () => {students;
  console.log("get all student" + getAllStudents());
  
  return students;
};

let getFirstStudent = () => {students[0];
  console.log("get first student" + getFirstStudent);
 
  return students[0];
};

let getLastStudent = () => {students[students.length - 1];
  console.log("getLastStudent"+getLastStudent());
};

let getStudentById = (id) => {students.find(student => student.id === id);
  console.log(getStudentById(7));
  
};

let getStudentsByStage = (stage) => {students.filter(student => student.stage === stage);
  console.log(getStudentById("Grade 9"));
 
};
let addStudent = (newStudent) => {
  students.push(newStudent);
  return students;
};
let newStudent = { "id": 21, "name": "Noah White", "stage": "Grade 10", "age": 15 };
  console.log(addStudent(newStudent));

let removeStudentById = (id) => {
  z = students.filter(student => student.id !== id);
  return z;
};
  console.log(removeStudentById(3));

let updateStudentById = (id, updatedData) => {
  students = students.map(student => 
    student.id === id ? { ...student, ...updatedData } : student
  );
  return students;
};
 console.log(updateStudentById(8, { "name": "afnan adnan", "age": 22 }));

let getAverageAge = () => {
  let totalAge = students.reduce((sum, student) => sum + student.age, 0);
  return totalAge / students.length;
};
 console.log(getAverageAge());
let getStudentsAboveAge = (age) => {
  students.length(student => student.age > age);
};
console.log(getStudentsAboveAge());
let getStudentsBylowAge = (age) => {
  students.reduce((youngest, student) => student.age < youngest.age ? student : youngest, students[0]);

  console.log(getYoungestStudent());

};

let getStudentByName = (name) => {
  students.find(student => student.name === name);

  return students.find(student => student.name === name);
};

let sortStudentsByName = () => {
  [...students].sort((a, b) => a.name.localeCompare(b.name));
  return [...students].sort((a, b) => a.name.localeCompare(b.name));
};

let sortStudentsByAge = () => {
  [...students].sort((a, b) => a.age - b.age);
  return[...students].sort((a, b) => a.age - b.age);
};

let filterStudentsByAge = (age) => {
  students.filter(student => student.age === age);
  return students.filter(student => student.age === age);
};

let filterStudentsByStage = (stage) => {
  students.filter(student => student.stage === stage);
  return students.filter(student => student.stage === stage);
};

let countStudents = () => {
  students.length;
  return students.length;
};

let countStudentsByStage = (stage) => {
  students.filter(student => student.stage === stage).length;
  return students.filter(student => student.stage === stage).length;
};

let incrementStudentAgeById = (id) => {
  let student = students.find(student => student.id === id);
  if (student) student.age += 1;
  return student;
};

let decrementStudentAgeById = (id) => {
    let student = students.find(student => student.id === id);
    if (student) student.age -= 1;
    return student;
  };


let getStudentsWithIdGreaterThan = (id) => {
  students.filter(student => student.id > id);
  return students.filter(student => student.id > id);
};

let getStudentsWithIdLessThan = (id) => {
  students.filter(student => student.id < id);
  return students.filter(student => student.id < id);
};

let getStudentsInRangeOfIds = (startId, endId) => {
  students.filter(student => student.id >= startId && student.id <= endId);
  return students.filter(student => student.id >= startId && student.id <= endId);
};

let getTotalAgeOfStudents = () => {
  students.reduce((sum, student) => sum + student.age, 0);
  return students.reduce((sum, student) => sum + student.age, 0);
};

let getAverageAgeByStage = (stage) => {
  let filteredStudents = students.filter(student => student.stage === stage);
  return filteredStudents.reduce((sum, student) => sum + student.age, 0) / filteredStudents.length;
};

let getYoungestStudent = () => {
   students.reduce((youngest, student) => student.age < youngest.age ? student : youngest, students[0]);
   return students.reduce((youngest, student) => student.age < youngest.age ? student : youngest, students[0]);
};

let getOldestStudent = () => {
   students.reduce((oldest, student) => student.age > oldest.age ? student : oldest, students[0]);
   return students.reduce((oldest, student) => student.age > oldest.age ? student : oldest, students[0]);
};

let hasStudentWithName = (name) => {
  students.some(student => student.name === name);
  return students.some(student => student.name === name);
};

let getNamesOfAllStudents = () => {
  students.map(student => student.name);
  return students.map(student => student.name);
};

let getAllStudentIds = () => {
  students.map(student => student.id);
  return students.map(student => student.id);
};

let getAllStudentStages = () => {
  [...new Set(students.map(student => student.stage))];
  return [...new Set(students.map(student => student.stage))];
};

let getStudentsWithNamesStartingWith = (letter) => {
  students.filter(student => student.name.startsWith(letter));
  return students.filter(student => student.name.startsWith(letter));
};

let getStudentsWithNamesEndingWith = (letter) => {
  students.filter(student => student.name.endsWith(letter));
  return students.filter(student => student.name.endsWith(letter));
};

let getStudentsWithNameLengthGreaterThan = (length) => {
  students.filter(student => student.name.length > length);
  return students.filter(student => student.name.length > length);
};

let getStudentsWithNameLengthLessThan = (length) => {
  students.filter(student => student.name.length < length);
  return students.filter(student => student.name.length < length);
};

let getAllStudentsSortedById = () => {
  [...students].sort((a, b) => a.id - b.id);
  return [...students].sort((a, b) => a.id - b.id);
};

let reverseStudentList = () => {
  [...students].reverse();
  return [...students].sort((a, b) => a.id - b.id);
};

let getRandomStudent = () => {
  students[Math.floor(Math.random() * students.length)];
  return students[Math.floor(Math.random() * students.length)];
};

let removeStudentsAboveAge = (age) => {
  name = students.filter(student => student.age <= age);
  return name = students.filter(student => student.age <= age);
};

let removeStudentsBelowAge = (age) => {
  y = students.filter(student => student.age >= age);
  return y = students.filter(student => student.age >= age);
};

let getStudentsBetweenAges = (minAge, maxAge) => {
  students.filter(student => student.age >= minAge && student.age <= maxAge);
  return students.filter(student => student.age >= minAge && student.age <= maxAge);
};

let countStudentsAboveAge = (age) => {
  students.filter(student => student.age > age).length;
  return students.filter(student => student.age > age).length;
};

let countStudentsBelowAge = (age) => {
  students.filter(student => student.age < age).length;
  return students.filter(student => student.age < age).length;

};

let addMultipleStudents = (newStudents) => {
  students.push(...newStudents);
  return students;
};

let removeMultipleStudentsById = (ids) => {
  x = students.filter(student => !ids.includes(student.id));
  return x = students.filter(student => !ids.includes(student.id));
};

let updateMultipleStudentsById = (ids, updatedData) => {
  data = students.map(student => ids.includes(student.id) ? { ...student, ...updatedData } : student);
  return data;
};

let isAllStudentsAboveAge = (age) => {
  students.every(student => student.age > age);
  return students.every(student => student.age > age);
};

let isAllStudentsBelowAge = (age) => {
  students.every(student => student.age < age);
  return students.every(student => student.age < age);
};

let hasStudentsInStage = (stage) => {
  students.some(student => student.stage === stage);
  return students.some(student => student.stage === stage);
};

let getStudentNamesWithIds = (ids) => {
  students.filter(student => ids.includes(student.id)).map(student => student.name);
  return students.filter(student => ids.includes(student.id)).map(student => student.name);
};