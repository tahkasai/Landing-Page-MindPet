import { useState } from "react";
import styles from "./Header.module.css";
import Button from "./../Button/Button";
import { ButtonAzul } from "./../Button/Button";

import icone from "./../../assets/icon/icon.svg";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = (e, id) => {
        e.preventDefault();
        const section = document.querySelector(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        setMenuOpen(false);
    };

    return (
        <>
            {/* MENU MOBILE */}
            <ul className={`${styles.menuMobile} ${menuOpen ? styles.show : ""}`}>
                <li><a href="#inicio" onClick={(e) => handleScroll(e, "#inicio")}>Início</a></li>
                <li><a href="#sobre" onClick={(e) => handleScroll(e, "#sobre")}>Sobre</a></li>
                <li><a href="#produto" onClick={(e) => handleScroll(e, "#produto")}>Produto</a></li>
                <ButtonAzul nomeBotao="Contato" link="#contato" onClick={(e) => handleScroll(e, "#contato")}/>
            </ul>

            {/* HEADER */}
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={icone} alt="Ícone" />
                    <span className={styles.titulo}>MindPet</span>
                </div>

                {/* MENU DESKTOP */}
                <ul>
                    <li><a href="#inicio" onClick={(e) => handleScroll(e, "#inicio")}>Início</a></li>
                    <li><a href="#sobre" onClick={(e) => handleScroll(e, "#sobre")}>Sobre</a></li>
                    <li><a href="#produto" onClick={(e) => handleScroll(e, "#produto")}>Produto</a></li>
                    <Button nomeBotao="Contato" link="#contato" onClick={(e) => handleScroll(e, "#contato")} />
                </ul>

                {/* ÍCONE MOBILE */}
                <div className={`${styles.menuBar} ${menuOpen ? styles.active : ""}`} onClick={toggleMenu}>
                    {menuOpen ? (
                        <i className="fa-solid fa-xmark"></i>
                    ) : (
                        <i className="fa-solid fa-bars"></i>
                    )}
                </div>
            </header>
        </>
    );
}
