import T from "./Trabajos.json";

export function Es() {
  return (
    <div>      {
        T.map((publi) => (
          <div key={publi.titulo}>
              <h2>{publi.titulo}</h2>
              <h3>{publi.descripcion}</h3>
              <img className={publi.esClass} src={publi.esIMG} alt="" />
              <h3><a className="header a" href={publi.eslink}>{publi.esshortDesc}</a> </h3>
              <br />
          </div>        
      )) 
    }</div>
  );
}
