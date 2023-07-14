import { FaCss3, FaGithub, FaHtml5, FaJs, FaLinkedin, FaReact } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
// import { CgShapeTriangle } from 'react-icons/cg'
import styles from "./assets/css/home.module.css";
import divisaoPagina from "./assets/img/divisao-pagina.png";

function Home() {

    // const paragraphHTML = document.querySelector("#demo");
    // const textWriteSelf = 'Quem ler é viado, huehue :)'; //Texto que se autoescreverá
    // const interval = 100; //intervalo de tempo (ms)

    // function ShowText(paragraphHTML, textWriteSelf, interval) { //função para autoescrita
    //     const char = textWriteSelf.split("").reverse(); /* dentro de 'char' o '.split' subdivide o texto ("") => pq todo texto será usado
    //     e 'reverse' iniciará da esquerda para direita*/

    //     const typer = setInterval(() => { //setar intervalo como 'typer'

    //         if (!char.length) { //se o texto estiver terminado
    //             return clearInterval(typer); //então limpe o intervalo
    //         }

    //         const next = char.pop(); //tirar última letra do elemento char com o método .pop

    //         paragraphHTML.innerHTML += next;// execute no elemento 'el'

    //     }, interval); //o setInterval terá o valor de fora do escopo

    // }

    // ShowText(paragraphHTML, textWriteSelf, interval);



    return (
        <>
            {/* <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
            <script>
                AOS.init();
            </script> */}
            <div className={styles.content_home}>
                <ul className={styles.icons_ul}>
                    <li><FaHtml5 className={`${styles.icons} ${styles.icons_html}`} /></li>
                    <li><FaCss3 className={`${styles.icons} ${styles.icons_css}`} /></li>
                    <li><FaJs className={`${styles.icons} ${styles.icons_js}`} /></li>
                    <li><FaReact className={`${styles.icons} ${styles.icons_react}`} /></li>
                </ul>
            </div>
            {/* <p id="demo">1111</p> */}
            <div className={styles.content_center}>
                <div className={styles.align}>
                    <h2 className={styles.subtitle}>Prazer <div className={styles.hello}>👋</div> João, eu sou</h2>
                    <p className={styles.title_2}>
                        <p className={styles.title}>FRONTEND
                            <section className={styles.iconsTitle}>
                                <a href="https://github.com/JvVenna?tab=repositories" target="_blank" rel="noreferrer"><FaGithub className={styles.github} /></a>
                                <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-ven%C3%A2ncio-116092245/" target="_blank" rel="noreferrer"><FaLinkedin className={styles.linkedin} /></a>
                                <a href="mailto:jv.venna@gmail.com?subject=&body=" target="_blank" rel="noreferrer"><MdEmail className={styles.email} /></a>
                            </section>
                        </p>
                        DEVELOPER<label className={styles.version}>
                            <a target='_blank' className={styles.version_a} href="https://victorworks.netlify.app">
                                2.0
                            </a>
                        </label></p>
                </div>
            </div>
            <img className={styles.divisao} src={divisaoPagina} alt="divisao" />
        </>
    )
}

export default Home