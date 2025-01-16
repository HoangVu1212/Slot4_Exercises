function AreAllTeenagers() {
    const people = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 17 },
    ];
  
    const allTeenagers = people.every((person) => person.age >= 13 && person.age <= 19);
  
    return (
      <div>
        <h2>Exercise 6: Check if all are teenagers </h2>
        <p>{allTeenagers ? "Yes, all are teenagers." : "No, not all are teenagers."}</p>
      </div>
    );
  }
  export default AreAllTeenagers;
  