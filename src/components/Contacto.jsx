import { useParams } from 'react-router-dom';

export function Contacto() {
  let { Lang } = useParams();
  //{Lang ? "" : ""}

  return (
    <div className="slider" id="contact">
      <h1 className="contact">{Lang ? "Contacto" : "Contact"}</h1>
      <h3>
      {Lang ? "Contactame por acá, o via " : "You can contact me here, or via"}
        <a className="header a" href="https://www.linkedin.com/in/facundojs/">
          LinkedIn
        </a>
      </h3>
      <br />
      <br />

      <form action="">
        <input
          disabled
          type="text"
          id="fname"
          name="firstname"
          placeholder={Lang ? "Nombre" : "Full name"}
        />
        <textarea
          disabled
          id="subject"
          name="subject"
          placeholder={Lang ? "Tu mensaje" : "Your message"}
        ></textarea>
        <input className="sum" type="submit" disabled value={Lang ? "Enviar" : "Submit"} />
      </form>

      <br />
      <br />
    </div>
  );
}
