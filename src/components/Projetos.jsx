import Projeto from './Projeto'
import styles from './assets/css/proj.module.css'
import phone from './assets/img/phone.png';
import tablet from './assets/img/tablet.png';
import tabletVirado from './assets/img/tabletVirado.png';
import phonePrintIntegral from './assets/img/print_phone.png';
import tabletPrintIntegral from './assets/img/print_tablet.png';
import tabletPrintPhp from './assets/img/formularioPhp.png';
function Projetos() {

    const altPhone = "imagem celular"
    const altPhonePrint = "imagem print celular"
    const altTablet = "imagem tablet"
    const altTabletPrint = "imagem print tablet"

    const urlIntegral = "https://integralclinica.netlify.app/"
    const tituloInt = "Integral Clínica"
    const textoInt = "Projeto básico de plano de saúde feito em HTML CSS e JS"

    const urlPhp = "https://pieridine-pointers.000webhostapp.com/formulario-jv/home.php"
    const tituloPhp = "Formulário em Php"
    const textoPhp = "Projeto de formulário completo feito em PHP para TCC"

    return (
        <div className={styles.bakground}>
            <div className={styles.content_projetos}>
                <Projeto phone={phone} altPhone={altPhone}
                    phonePrint={phonePrintIntegral} altPhonePrint={altPhonePrint}
                    tablet={tablet} altTablet={altTablet}
                    tabletPrint={tabletPrintIntegral} altTabletPrint={altTabletPrint}
                    link={urlIntegral} titulo={tituloInt} texto={textoInt} />
                <Projeto
                    // phonePrint={[]} altPhonePrint={[]}
                    tablet={tabletVirado} altTablet={altTablet}
                    tabletPrint={tabletPrintPhp} altTabletPrint={altTabletPrint}
                    link={urlPhp} titulo={tituloPhp} texto={textoPhp} />
            </div>
            <a className={styles.knowmore} target='_blank' rel='noreferrer' href="https://exdinamicos.netlify.app">projetos dinâmicos</a>
        </div >
    )
}

export default Projetos