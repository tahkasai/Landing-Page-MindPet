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
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#sobre">Sobre</a></li>
                            <li><a href="#produto">Produto</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                    </div>
                    <div className={styles.redes}>
                        <ul className="icons">
                            <li><a href="https://www.linkedin.com/in/taina-kasai"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/tahkasai"><i class="fa-brands fa-github"></i></a></li>
                            <li><a href="https://linktr.ee/taina_kasai"><i class="fa-brands fa-linktree"></i></a></li>
                            <li><a href="https://www.behance.net/tahkasai"><i class="fa-brands fa-square-behance"></i></a></li>
                        </ul>
                        <p>E-mail: tainakasai01@gmail.com</p>
                    </div>
                </div>
            </footer>
        </>
    );
}