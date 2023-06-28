import styles from './assets/css/proj.module.css'

function Projeto({ phone, altPhone, phonePrint, altPhonePrint, tablet, altTablet, tabletPrint, altTabletPrint, titulo, texto, link }) {
    // const phone:
    return (
        <div><div className={styles.projetos}>
            <div className={styles.proj1}>
                <a target='_blank' href={link}>
                    <div className={styles.phone_tablet}>
                        <div className={styles.phone}>
                            <img className={styles.phonePrintImg} src={phonePrint} alt={altPhone} />
                            <img className={styles.phoneImg} src={phone} alt={altPhonePrint} />
                        </div>
                        <div className={styles.tablet}>
                            <img className={styles.tabletPrintImg} src={tabletPrint} alt={altTabletPrint} />
                            <img className={styles.tabletImg} src={tablet} alt={altTablet} />
                        </div>
                    </div>
                </a>
                <div className={styles.textProj}>
                    <h2 className={styles.title}>{titulo}</h2>
                    <p className={styles.text}>{texto}</p>
                </div>
            </div>
        </div></div >
    )
}

export default Projeto