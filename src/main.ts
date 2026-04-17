import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main class="container">
    <header>
      <h1>Laboratorio de Layout</h1>
      <p>Ejercicios finalizados con éxito</p>
    </header>
    
    <section class="ejercicios-grid">
      <p>Los 4 ejercicios de CSS y Sass están listos en sus respectivos directorios.</p>
    </section>
  </main>
`;
