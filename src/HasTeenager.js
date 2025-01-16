function HasTeenager() {
    const people = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 17 },
    ];
  
    const hasTeenager = people.some((person) => person.age >= 13 && person.age <= 19);
  
    return (
      <div>
        <h2>Exercise 9: Find the Oldest and Youngest Person</h2>
        <p>{hasTeenager ? "Yes, there is at least one teenager." : "No, there are no teenagers."}</p>
      </div>
    );
  }
  export default HasTeenager;
  