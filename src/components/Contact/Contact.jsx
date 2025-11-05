import { ButtonAzulSubmit } from '../Button/Button';

import Styles from './Contact.module.css'
export default function Contact(){
    return(
        <>
            <section className={Styles.contato}>
                <div className={Styles.informacao}>
                    <div className={Styles.cabecario}>
                        <h2>Contato</h2>
                        <p>Quer saber mais sobre o MindPet ou meu trabalho? Converse comigo! </p>
                    </div>
                    <div className={Styles.contatos}>
                        <div>
                            <p><b>E-mail</b></p>
                            <p>tainakasai01@gmail.com</p>
                        </div>
                        <div>
                            <p><b>Telefone</b></p>
                            <p>+55 (11) 9663691-60</p>
                        </div>
                        <div>
                            <p><b>Linketree</b></p>
                            <p>@taina_kasai</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.forms}>
                    <form action="">
                        <input type="text" placeholder="Nome*" required/>
                        <input type="text" placeholder="E-mail*" required/>
                        <input type="text" placeholder="Assunto*" required/>
                        <textarea name="mensagem" id="mensagem" cols="30" rows="10" placeholder='Mensagem*' required></textarea>
                        <ButtonAzulSubmit/>
                    </form>
                </div>
            </section>
        </>
    );
}