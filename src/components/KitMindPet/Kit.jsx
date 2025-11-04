import Imagem from './../../assets/image/kit.jpg';
import Styles from './Kit.module.css'

export default function Kit(){
    return(
        <>
            <section className={Styles.kit}>
                <h2>Kit <span className="texto-azul">MindPet</span></h2>
                <div className={Styles.boxKit}>
                    <div className={Styles.informacoes}>
                        <p><b>Coleira com alto-falante</b></p>
                        <ul>
                            <li><p>Silicone premium hipoalergênico e à prova d’água.</p></li>
                            <li><p>Bateria recarregável com durabilidade de até 7 dias.</p></li>
                            <li><p>Comunicação sonora de até 65 dB, conectividade via Bluetooth e Wi-Fi, e integração automática com o chip sensorial.</p></li>
                        </ul>
                        <p><b>Carregador Magnético</b></p>
                        <ul>
                            <li><p>Magnético por indução, exclusivo para a coleira.</p></li>
                            <li><p>Tempo médio de carga completa: 2 horas</p></li>
                        </ul>
                        <p><b>Chip Sensorial com GPS</b></p>
                        <ul>
                            <li><p>Sensores biométricos que captam dados corporais (como batimentos e temperatura) e padrões de movimento.</p></li>
                            <li><p>Rastreamento GPS integrado.</p></li>
                        </ul>
                        <p><b>Aplicador do Chip</b></p>
                        <ul>
                            <li><p>Dispositivo estéril de uso único, de polímero médico descartável.</p></li>
                        </ul>
                    </div>
                    <div className={Styles.imagem}>
                        <img src={Imagem} alt="Kit"/>
                    </div>
                </div>
            </section>

        </>
    );
}