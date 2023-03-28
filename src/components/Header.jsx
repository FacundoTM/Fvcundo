import { useParams, Link } from 'react-router-dom';

export function Header() {
  let { Lang } = useParams();

  return (
    <header>
      <h1 id="nav-title">
        <a href={Lang ? "./es" : "./"}>Facundo</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#about">{Lang ? "Sobre mi" : "About"}</a>
          </li>
          <li>
            <a href="#portfolio">{Lang ? "Trabajos" : "Portfolio"}</a>
          </li>
          <li>
            <a href="#contact">{Lang ? "Contacto" : "Contact"}</a>
          </li>
          <li>
            <Link to={Lang ? "./" : "./es"}>{Lang ? "English" : "Español"}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
