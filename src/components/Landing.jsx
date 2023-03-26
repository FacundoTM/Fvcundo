import { Slider } from './Slider';
import { Header } from './Header';
import { Portfolio } from './Portfolio';
import { Contacto } from './Contacto';
import { Footer } from './Footer';

export function Landing() {
    return(
    <div>
        <div className="container">
            <Header />
            <Slider />
        </div>
        <div>
            <Portfolio />
        </div>
        <div>
            <Contacto />
            <Footer />
        </div>
    </div>
    );
}