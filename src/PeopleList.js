function PeopleList() {
    const people = [
      { name: "Alice", age: 25, occupation: "Engineer" },
      { name: "Bob", age: 30, occupation: "Designer" },
      { name: "Charlie", age: 20, occupation: "Student" },
    ];
  
    return (
      <div>
        <h2>Exercise 3: Display a list of people</h2>
        <ul>
          {people.map((person, index) => (
            <li key={index}>
              {person.name} - {person.age} years old - {person.occupation}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default PeopleList;
  