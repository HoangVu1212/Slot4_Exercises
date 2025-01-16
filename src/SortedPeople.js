function SortedPeople() {
    const people = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 20 },
    ];
  
    const sortedPeople = [...people].sort((a, b) => a.age - b.age);
  
    return (
      <div>
        <h2>Exercise 10: Calculate the Average Age of Each Occupation</h2>
        <ul>
          {sortedPeople.map((person, index) => (
            <li key={index}>
              {person.name} - {person.age} years old
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default SortedPeople;
  