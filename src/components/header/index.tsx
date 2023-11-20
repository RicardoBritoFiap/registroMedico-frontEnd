/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import Icon from '../../assets/images/icone-logo.png'
import styles from './style.module.scss'
import Link from 'next/link'

export function HeaderMain() {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.container}>
                <div className={styles['container-logo']}>
                    <Image
                        src={Icon}
                        alt='icon-logo'
                        width={46}
                        height={46}
                    />

                    <h1>Registro Médico</h1>
                </div>

                <div className={styles['container-btns']}>
                    <Link href={'login'} className={styles['link-login']}>Login</Link>
                    <Link href={'cadastro'} className={styles['link-register']}>Cadastre-se</Link>
                </div>
            </div>
        </header>
    )
}
