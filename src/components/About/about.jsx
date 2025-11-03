import styles from './about.module.css';

export default function About(props){
    return(
        <>
            <section className={styles.sobre}>
                <h2>MindPet, quem <span className="texto-azul">conecta</span> você ao seu pet!</h2>
                <div className={styles.texto}>
                    <p>A MindPet é um <b>sistema inteligente que analisa sinais corporais e comportamentais do seu pet com o apoio da inteligência artificial</b>. Com essa tecnologia, é possível compreender o que cada sinal significa — se ele está com fome, ansioso, cansado ou apenas querendo brincar.</p>
                    <p>Mais do que uma ferramenta de conexão, a MindPet <b>proporciona cuidados mais precisos e personalizados</b>, ajudando você a entender melhor as necessidades do seu companheiro. Além disso, o sistema é capaz de identificar sinais de possíveis problemas de saúde, permitindo uma visita rápida ao veterinário e garantindo o bem-estar do seu pet.</p>
                </div>
            </section>
        </>
    );
}