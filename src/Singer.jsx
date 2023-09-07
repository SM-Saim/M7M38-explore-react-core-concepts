export default function Singer({ naam }) {
  console.log(naam);
  return (
    <div>
      <h2>Singer Name:{naam.name}</h2>
      <p>Age:{naam.age}</p>
    </div>
  );
}
