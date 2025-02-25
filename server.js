const express = require("express");
const students = require("./data.json")
const app = express();
app.use(express.json()); 



app.get("/students", (req, res) => {
  res.json(students);
});


app.get("/students/first", (req, res) => {
  res.json(students[0]);
});


app.get("/students/last", (req, res) => {
  res.json(students[students.length - 1]);
});


app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "student not found" });
  res.json(student);
});


app.post("/students", (req, res) => {
  const newStudent = { id: students.length + 1, ...req.body };
  students.push(newStudent);
  res.status(201).json(newStudent);
});


app.put("/students/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "student not found" });

  Object.assign(student, req.body);
  res.json(student);
});


app.delete("/students/:id", (req, res) => {
  students = students.filter(s => s.id !== parseInt(req.params.id));
  res.json({ message: "The student has been successfully deleted" });
});


app.get("/students/average-age", (req, res) => {
    const avgAge = students.reduce((sum, s) => sum + s.age, 0) / students.length;
    res.json({ averageAge: avgAge });
  });
  
  
  app.get("/students/age-above/:age", (req, res) => {
    res.json(students.filter(s => s.age > parseInt(req.params.age)));
  });
  
  
  app.get("/students/youngest", (req, res) => {
    const youngest = students.reduce((youngest, s) => (s.age < youngest.age ? s : youngest), students[0]);
    res.json(youngest);
  });
  

  app.get("/students/oldest", (req, res) => {
    const oldest = students.reduce((oldest, s) => (s.age > oldest.age ? s : oldest), students[0]);
    res.json(oldest);
  });
  

  app.get("/students/count/stage/:stage", (req, res) => {
    const count = students.filter(s => s.stage === req.params.stage).length;
    res.json({ stage: req.params.stage, count });
  });

  app.patch("/students/:id/increment-age", (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (student) {
      student.age += 1;
      res.json(student);
    } else {
      res.status(404).json({ message: "student not found" });
    }
  });
  
 
  app.patch("/students/:id/decrement-age", (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (student) {
      student.age -= 1;
      res.json(student);
    } else {
      res.status(404).json({ message: "student not found" });
    }
  });
  
  
  app.get("/students/names", (req, res) => {
    res.json(students.map(s => s.name));
  });
  
  
  app.get("/students/ids", (req, res) => {
    res.json(students.map(s => s.id));
  });
  
 
  app.get("/students/sorted-by-name", (req, res) => {
    res.json([...students].sort((a, b) => a.name.localeCompare(b.name)));
  });
  
  
  app.get("/students/sorted-by-age", (req, res) => {
    res.json([...students].sort((a, b) => a.age - b.age));
  });
  

  app.get("/students/exists/:name", (req, res) => {
    const exists = students.some(s => s.name === req.params.name);
    res.json({ exists });
  });
  
  
  app.get("/students/age-between/:min/:max", (req, res) => {
    res.json(students.filter(s => s.age >= parseInt(req.params.min) && s.age <= parseInt(req.params.max)));
  });
  
  
  app.get("/students/sorted-by-id", (req, res) => {
    res.json([...students].sort((a, b) => a.id - b.id));
  });
  

  app.get("/students/random", (req, res) => {
    const randomStudent = students[Math.floor(Math.random() * students.length)];
    res.json(randomStudent);
  });
  
  
  app.delete("/students/remove-above-age/:age", (req, res) => {
    students = students.filter(s => s.age <= parseInt(req.params.age));
    res.json({ message: "Students older than the specified age have been removed" });
  });
  

  app.delete("/students/remove-below-age/:age", (req, res) => {
    students = students.filter(s => s.age >= parseInt(req.params.age));
    res.json({ message: "Students younger than the specified age have been removed" });
  });
  
  
  app.get("/students/count-above-age/:age", (req, res) => {
    const count = students.filter(s => s.age > parseInt(req.params.age)).length;
    res.json({ count });
  });
  

  app.get("/students/count-below-age/:age", (req, res) => {
    const count = students.filter(s => s.age < parseInt(req.params.age)).length;
    res.json({ count });
  });
  
const PORT = 3001;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));



