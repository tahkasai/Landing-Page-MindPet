import ButtonPreto from "../Button/Button";
import { ButtonTransparente } from "../Button/Button";
import Topicos from "./Topicos/Topico";

import Imagem from "./../../assets/image/imagem.png";

import styles from './Banner.module.css';

export default function Banner(props){
    return(
        <>
        <section className={styles.banner}>
            <div className={styles.informacoesBanner}>
                <h1>Ouça o que seu animal mais precisa com o MindPet <span className="texto-azul">.</span></h1>
                <p>A tecnologia que interpreta os sinais corporais e comportamentais do seu pet em emoções e necessidades.</p>
                <div className={styles.botoes}>
                    <ButtonPreto nomeBotao='Entre em contato'/>
                    <ButtonTransparente nomeBotao='Leia mais'/>
                </div>
            </div>
            <div className="imagem-banner">
                <img src={Imagem} alt="cachorro com a coleira mindpet"/>
            </div>
        </section>
        <section className={styles.topicos}>
            <Topicos icon='fa-solid fa-heart-circle-plus' titulo='Sistema Inteligente com Inteligência artificial' texto='Sensores integrados e IA que interpretam sinais corporais e comportamentais do seu pet'/>
            <Topicos icon='fa-solid fa-heart-circle-plus' titulo='Mapeamento de bem-estar' texto='Acompanha em tempo real o humor, nível de atividade e conforto do seu companheiro.'/>
            <Topicos icon='fa-solid fa-comments' titulo='Microchip e coleira com alto-falante ' texto='O chip envia informações para o app e reproduz alertas sonoros personalizados na coleira.'/>
        </section>
        </>
    );
}