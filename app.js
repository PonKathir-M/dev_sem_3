function StudentTracker() {
  const [students, setStudents] = React.useState([]);
  const [name, setName] = React.useState('');
  const [id, setId] = React.useState('');

  const addStudent = () => {
    if (!name || !id) return alert("Enter both name & ID");
    const newStudent = { name, id };
    setStudents([...students, newStudent]);
    setName(''); setId('');
  };

  const removeStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>🎓 Student Tracker</h1>
      <input
        type="text"
        placeholder="Enter Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Student ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={addStudent}>Add Student</button>

      <div className="student-list">
        <h3>Student List</h3>
        {students.length === 0 ? (
          <p>No students added yet.</p>
        ) : (
          students.map((s, i) => (
            <div key={i} className="student-item">
              <span>{s.name} ({s.id})</span>
              <button className="remove-btn" onClick={() => removeStudent(i)}>X</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StudentTracker />);
