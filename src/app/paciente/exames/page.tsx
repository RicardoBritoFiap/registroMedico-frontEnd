import { FooterMain } from "@/components/footer";
import { HeaderPatient } from "@/components/header";
import styles from './style.module.scss'
import ItemExame from "./item";
import Link from "next/link";
import { RxExit } from "react-icons/rx";

export default function Exames() {
    return (
        <>
            <HeaderPatient />

            <main className={styles.menu}>
                <div className={styles.container}>
                    <section className={styles['section-send-exams']}>
                        <h2>Enviar Exames</h2>

                        <button>Anexar Arquivos</button>
                    </section>

                    <section className={styles['section-consult']}>
                        <h2>Consultar Pré-Diagnóstico</h2>

                        <ul className={styles.list}>
                            <div className={styles['header-list']}>
                                <span>Pré-Diagnostico</span>
                                <span>Resultado</span>
                            </div>   

                            <ItemExame nome="Hepatite" resultado="Negativo"/>
                        </ul>
                    </section>
                </div>
            </main>

            <Link href={'/'} className={styles['link-exit']}><RxExit size='28px'/></Link>

            <FooterMain/>
        </>
    )
}