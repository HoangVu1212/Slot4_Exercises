function PersonDetails() {
  const person = {
    name: "John Doe",
    age: 25,
    occupation: "Software Developer",
  };

  return (
    <div>
      <h2>Exercise 2: Display a person's details</h2>
      <p><strong>Name:</strong> {person.name}</p>
      <p><strong>Age:</strong> {person.age}</p>
      <p><strong>Occupation:</strong> {person.occupation}</p>
    </div>
  );
}

export default PersonDetails;
