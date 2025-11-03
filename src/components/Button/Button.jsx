import styles from './Button.module.css';

export default function ButtonPreto(props){
    return(
        <>
            <button className={styles.botaoPreto}><a href={props.link}>{props.nomeBotao}</a></button>
        </>
    );
}
export function ButtonTransparente(props){
    return(
        <>
            <button className={styles.botaoTransparente}><a href={props.link}>{props.nomeBotao}</a></button>
        </>
    );
}
export function ButtonBranco(props){
    return(
        <>
            <button className={styles.ButtonBranco}><a href={props.link}>{props.nomeBotao}</a></button>
        </>
    );
}