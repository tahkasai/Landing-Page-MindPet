import styles from './Header.module.css'
import Button from './../Button/Button'
// Imagem
import icone from './../../assets/icon/icon.svg'

export default function Header(){
    return(
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={icone} alt="Icone"/>
                    <span className={styles.titulo}>MindPet</span>
                </div>
                <ul>
                    <li><a href="#">Inicío</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Produto</a></li>
                    <Button nomeBotao='Contato'/>
                </ul>
                <div className={styles.menuBar}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                    
            </header>
        </>
    );
}