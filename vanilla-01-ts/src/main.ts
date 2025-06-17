import "./style.css";

interface AboutMe {
  name: string;
  age: number;
  currentJob: string;
  profession: string;
  location?: string;
  hobbies?: string[];
  bio?: string;
}

const message: string = "Welcome to my website";
const completeName: string = "Luigi Llerena";
const aboutMe: AboutMe = {
  name: "Luigi Llerena",
  age: 24,
  currentJob: "Software Developer",
  profession: "Full Stack Developer",
  location: "Quito, Ecuador",
  hobbies: ["Coding", "Reading", "Gaming"],
  bio: "Passionate developer",
};

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
  <section class="about-me">
    <p>Name: ${aboutMe.name}</p>
    <p>Age: ${aboutMe.age} years old</p>
    <p>Job: ${aboutMe.currentJob}</p>
    <p>Profession: ${aboutMe.profession}</p>
    <p>Location: ${aboutMe.location ?? "Not specified"}</p>
    <p>Hobbies: ${aboutMe.hobbies?.join(", ") ?? "No hobbies listed"}</p>
    <p>Bio: ${aboutMe.bio ?? "No biography available"}</p>
  </section>
`;
