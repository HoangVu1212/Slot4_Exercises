function FirstTeenager() {
    const people = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 17 },
    ];
  
    const teenager = people.find((person) => person.age >= 13 && person.age <= 19);
  
    return (
      <div>
        <h2>Exercise 5: Find the first teenager </h2>
        {teenager ? (
          <p>The first teenager is {teenager.name}, aged {teenager.age}.</p>
        ) : (
          <p>No teenagers found.</p>
        )}
      </div>
    );
  }
  export default FirstTeenager;
  