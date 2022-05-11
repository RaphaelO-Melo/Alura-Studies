import chronometer from './chronometer.module.scss';
import Button from '../Button';
import Clock from './Clock';

export default function Chronometer() {
    return(
        <div className={chronometer.cronometro}>
            <p className={chronometer.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={chronometer.relogioWrapper}>
                <Clock/>
            </div>
            <Button>Começar!</Button>
        </div>
    )
}