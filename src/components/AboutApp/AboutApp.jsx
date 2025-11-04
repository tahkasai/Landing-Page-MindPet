import { ButtonBranco } from "../Button/Button";
import Styles from './AboutApp.module.css';

import Imagem from './../../assets/image/celular.svg'

export default function AboutApp(){
    return(
        <>
        <div className={Styles.background}>
            <div className={Styles.app}>
                <div className={Styles.informacao}>
                    <h2>Dê voz ao seu pet com MindPet.</h2>
                    <p>Adquirindo seu Kit MindPet, você tem acesso ao nosso aplicativo, que reúne os dados captados pelos sensores e mostra relatórios em tempo real sobre o bem-estar do seu pet.</p>
                    <div>
                        <ButtonBranco nomeBotao='Entre em Contato'/>
                    </div>
                </div>
                <div className={Styles.mockup}>
                    <img src={Imagem} alt="Mockup" />
                </div>
            </div>
        </div>
        </>
    );
}