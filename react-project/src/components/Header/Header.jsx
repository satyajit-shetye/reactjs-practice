import './Header.css';

export default function Header() {
  const randomIndex = Math.floor(Math.random() * 3);
  const contentDescription = ["Fundamental", "Crucial", "Core"];

  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {contentDescription[randomIndex]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}
