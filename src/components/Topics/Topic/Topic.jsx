import styles from './../Topics.module.css'

export default function Topic(props){
    return(
        <>
            <article className={styles.card}>
                <i class={props.icon}></i>
                <p>{props.titulo}</p>
                <span className="titulo">{props.texto}</span>
            </article>
        </>
    );
}