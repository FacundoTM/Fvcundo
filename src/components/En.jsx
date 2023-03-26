import T from "./Trabajos.json";

export function En() {
    return (
      <div>      {
          T.map((publi) => (
            <div key={publi.title}>
                <h2>{publi.title}</h2>
                <h3>{publi.description}</h3>
                <img className={publi.tClass} src={publi.tIMG} alt="" />
                <h3><a className="header a" href={publi.link}>{publi.shortDesc}</a> </h3>
                <br />
            </div>        
        )) 
      }</div>
    );
  }
  