import { Trabajos } from "./Trabajos.jsx";
import { useParams } from 'react-router-dom';

export function Portfolio() {
  let { Lang } = useParams();

  return (

        <div id="portfolio" className="slider pF">
            <br/><br/>
            <h1 className="pF">{Lang ? "Trabajos" : "Portfolio"}</h1><br/><br/><br/><hr width="90%"/>
            <br/>
            <Trabajos />
        </div>
        
  );
}
