import Imagem from './../../assets/icon/icon.svg'
import styles from './Footer.module.css'

export default function Footer(){
    return(
        <>
            <footer>
                <div className={styles.footer}>
                    <div className={styles.mindpet}>
                        <div className={styles.mindpetLogo}>
                            <img src={Imagem} alt="logo mindpet" />
                            <span className={styles.nomelogo}>MindPet</span>
                        </div>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Produto</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </div>
                    <div className={styles.redes}>
                        <ul className="icons">
                            <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-linktree"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-square-behance"></i></a></li>
                        </ul>
                        <p>E-mail: tainakasai01@gmail.com</p>
                    </div>
                </div>
            </footer>
        </>
    );
}