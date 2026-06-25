export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <h1>Step into the natural world</h1>
        <p>
          Discover the stories written millions of years ago.
        </p>
      </header>

      <section className="panel">
        <h2>Tyrannosaurus Rex</h2>

        <div className="stats">
          <p>Late Cretaceous Period</p>
          <p>68–66 million years ago</p>
          <p>Length: 12.3 m</p>
          <p>Height: 4.0 m</p>
        </div>
      </section>

      <section className="chapters">
        <h3>Chapter List</h3>
        <ul>
          <li>Age of Dinosaurs</li>
          <li>Fossils of Ancient Life</li>
          <li>Reptiles of the Mesozoic</li>
          <li>Marine Fossil Gallery</li>
          <li>Prehistoric Giants</li>
        </ul>
      </section>
    </div>
  );
}
