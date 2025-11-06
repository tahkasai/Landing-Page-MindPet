import { useEffect } from 'react';
import styles from './Header.module.css'
import Button from './../Button/Button'
import { ButtonAzul } from './../Button/Button';
// Imagem
import icone from './../../assets/icon/icon.svg'

export default function Header(){
      useEffect(() => {
        const menuIcon = document.querySelector(`.${styles.menuBar}`);
        const menuMobile = document.querySelector(`.${styles.menuMobile}`);

        if (!menuIcon || !menuMobile) return;

        const toggleMenu = () => {
        menuMobile.classList.toggle(styles.show);
        menuIcon.classList.toggle(styles.active);
        menuIcon.innerHTML = menuMobile.classList.contains(styles.show)
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
        };

        menuIcon.addEventListener("click", toggleMenu);

        const links = menuMobile.querySelectorAll("a");
        links.forEach(link =>
        link.addEventListener("click", () => {
            menuMobile.classList.remove(styles.show);
            menuIcon.classList.remove(styles.active);
        })
        );

        return () => {
        menuIcon.removeEventListener("click", toggleMenu);
        };
    }, []);
    return(
        <>
            <ul className={styles.menuMobile}>
                <li><a href="#inicio">Inicío</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#produto">Produto</a></li>
                <ButtonAzul nomeBotao='Contato' link='#contato'/>
            </ul>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={icone} alt="Icone"/>
                    <span className={styles.titulo}>MindPet</span>
                </div>
                <ul>
                    <li><a href="#inicio">Inicío</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#produto">Produto</a></li>
                    <Button nomeBotao='Contato' link='#contato'/>
                </ul>
                <div className={styles.menuBar}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </header>
            
        </>
    );
}