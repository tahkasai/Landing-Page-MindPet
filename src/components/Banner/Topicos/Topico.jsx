import styles from './../Banner.module.css'

export default function Topicos(props){
    return(
        <>
            <div className={styles.topico}>
                <div className={styles.titulo}>
                    <i class={props.icon}></i>
                    <p>{props.titulo}</p>
                </div>
                <span className={styles.texto}>
                    {props.texto}
                </span>
            </div>
        </>
    );
}