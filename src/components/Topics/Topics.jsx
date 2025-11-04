import styles from './Topics.module.css';
import Topic from './Topic/Topic';

export default function Topics(){
    return(
        <>
            <section className={styles.topicos}>
                <Topic 
                icon='fa-solid fa-brain'
                titulo='Monitoramento contínuo'
                texto='O MindPet observa o comportamento do seu pet ao longo do dia, captando sinais sutis que você talvez não perceba.'
                />
                <Topic
                icon='fa-solid fa-lightbulb'
                titulo='Insights inteligentes'
                texto='A plataforma processa os dados e transforma em informações claras sobre o humor, necessidades e bem-estar do seu pet.'
                />
                <Topic
                icon='fa-solid fa-hand-holding-hand'
                titulo='Cuidados personalizados'
                texto='Recebe recomendações práticas e alertas no aplicativo, ajudando a antecipar cuidados e garantir mais conforto ao seu companheiro.'
                />
            </section>
        </>
    );
}