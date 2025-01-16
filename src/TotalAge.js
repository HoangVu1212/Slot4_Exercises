function TotalAge() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 30, occupation: "Doctor" },
    { name: "Charlie", age: 22, occupation: "Engineer" },
    { name: "David", age: 28, occupation: "Teacher" },
    { name: "Eve", age: 24, occupation: "Doctor" },
  ];

  // Hàm sắp xếp
  const sortedPeople = [...people].sort((a, b) => {
    // So sánh occupation trước (thứ tự bảng chữ cái)
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;

    // Nếu occupation giống nhau, so sánh age
    return a.age - b.age;
  });

  return (
    <div>
      <h2>Exercise 7: Sort by Occupation and Then by Age</h2>
      <ul>
        {sortedPeople.map((person, index) => (
          <li key={index}>
            <strong>{person.name}</strong>: {person.age} years old, {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

  export default TotalAge;
  