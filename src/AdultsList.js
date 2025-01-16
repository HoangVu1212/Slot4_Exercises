function AdultsList() {
    const people = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 17 },
    ];
  
    const adults = people.filter((person) => person.age > 18);
  
    return (
      <div>
        <h2>Exercise 8: Group People by Occupation</h2>
        <ul>
          {adults.map((person, index) => (
            <li key={index}>
              {person.name} - {person.age} years old
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default AdultsList;
  