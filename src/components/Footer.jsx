import { useParams } from 'react-router-dom';

export function Footer() {
  let { Lang } = useParams();
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="row">Fvcundo | {Lang ? "Creado con React! <3" : "Created with React! <3"} </div>
        </div>
      </footer>
    </div>
  );
}
