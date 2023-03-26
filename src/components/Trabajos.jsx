import { useParams } from 'react-router-dom';
import { Es } from "./Es";
import { En } from "./En";

export function Trabajos() {
  let { Lang } = useParams();

  return (

    <div>
      {Lang ? Es() : En() }
    </div>
    );
}
