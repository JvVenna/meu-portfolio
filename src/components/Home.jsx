import styles from "./assets/css/home.module.css";
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa'

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
                {/* <p id="demo">1111</p> */}
                <div className={styles.content_center}>
                    <div className={styles.align}>
                        <h2 className={styles.subtitle}>Prazer <div className={styles.hello}>👋</div> João, eu sou</h2>
                        <p className={styles.title_2}>
                            <p className={styles.title}>FRONTEND </p>
                            DEVELOPER</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home