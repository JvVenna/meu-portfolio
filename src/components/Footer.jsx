import styles from "./assets/css/footer.module.css"
import logo from './assets/img/logo.png'
import cv from './assets/img/cv.png'
import cvPdf from './assets/img/CV13-joao.pdf'
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {

    return (
        <footer>
            <div className={styles.border}>
                <div>
                    <a href="https://github.com/JvVenna?tab=repositories" target="_blank" rel="noreferrer"><FaGithub className={styles.iconsGithub} /></a>
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-ven%C3%A2ncio-116092245/" target="_blank" rel="noreferrer"><FaLinkedin className={styles.iconsLinkedin} /></a>
                    <a href={cvPdf} target="_blank" rel="noreferrer"><img src={cv} alt="curriculo" /></a>
                </div>
                <div className={styles.textFooter}>
                    <h2>Copyright© 2023 |</h2>
                    <h2> Powered by
                        <a href="https://joao01.netlify.app/">
                            <img className={styles.logoFooter} src={logo} alt="logo" />
                        </a>
                    </h2>
                </div>
            </div>
        </footer>
    )
}

export default Footer