import "./style.css";

const message: string = "Welcome to my website";
const completeName: string = "Luigi Llerena";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <section class="content-section">
  <div>
      <h1>Hello, I'm <span>${completeName}</span> !</h1>
    <hr/>
  </div>
  <div>
   <p>${message}</p>
   </div>
  </section>
`;
