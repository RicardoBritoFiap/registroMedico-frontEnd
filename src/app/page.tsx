import { HeaderMain } from '@/components/header'
import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Background from '../assets/images/conjunto-de-icones-de-vetor-de-tecnologia-medica-para-saude-e-bem-estar.jpg'
import { FooterMain } from '@/components/footer'

export default function Home() {
  return (
    <>
      <HeaderMain />
      
      <main className={styles.menu}>
        <div>
          <h2>
            Lorem Ipsum is that it has a more-or-less normal distribution of letters.
          </h2>

          <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English to using Content here, content here.</p>
        
          <Link href={'login'} className={styles['link-login']}>Login</Link>
          <Link href={'cadastro'} className={styles['link-register']}>Cadastro</Link>
        </div>

        <Image 
          src={Background} 
          alt={'backround-saude'}
          className={styles.background}
        />
      </main>

      <FooterMain />
    </>
  )
}


{/* <Image
  src="/next.svg"
  alt="Next.js Logo"
  width={180}
  height={37}
  priority
/> */}
{/* <Link href={`link/${Image}`}/> */}