'use client'
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './stylle.module.scss'
import { iRegisterDoctor, iRegisterPatient } from '@/interfaces/cadastro.interfaces';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerDoctorSchema, registerPatienteSchema } from '@/schemas/cadastro.schemas';
import Link from 'next/link';


export function FormPatient() {
    const { register, handleSubmit, formState: { errors } } = useForm<iRegisterPatient>({
        resolver: zodResolver(registerPatienteSchema),
    })

    const registerPatient: SubmitHandler<iRegisterPatient> = (registerData: iRegisterPatient) => {
        console.log(registerData)
    };

    return (
        <form onSubmit={handleSubmit(registerPatient)} className={styles.formulario}>
            <div className={styles['div-inputs']}>
                <div className={styles['div-input']}>
                    <div className={styles['container-input']}>
                        <label htmlFor="name">Nome</label>
                        <input id="name" type="text" placeholder="Nome Completo" { ...register('nome') }/>
                    </div>

                    <span className={errors.nome?.message ? styles['span-error'] : undefined}>{errors.nome?.message ? errors.nome.message : null}</span>
                </div>

                <div className={styles['div-input']}>
                    <div className={styles['container-input']}>
                        <label htmlFor="mail">Email</label>
                        <input id="mail" type="email" placeholder="joao123@gmail.com" { ...register('email') }/>
                    </div>

                    <span className={errors.email?.message ? styles['span-error'] : undefined}>{errors.email?.message ? errors.email.message : null}</span>
                </div>

                <div className={styles['div-input']}>
                    <div className={styles['container-input']}>
                        <label htmlFor="password">Senha</label>
                        <input id="password" type="password" placeholder="Senha" { ...register('senha') }/>
                    </div>

                    <span className={errors.senha?.message ? styles['span-error'] : undefined}>{errors.senha?.message ? errors.senha.message : null}</span>
                </div>

                <div className={styles['div-input']}>
                    <div className={styles['container-input']}>
                        <label htmlFor="cpf">CPF</label>
                        <input id="cpf" type="text" placeholder="CPF" { ...register('cpf') }/>
                    </div>

                    <span className={errors.cpf?.message ? styles['span-error'] : undefined}>{errors.cpf?.message ? errors.cpf.message : null}</span>
                </div>

                <div className={styles['div-input']}>
                    <div className={styles['container-input']}>
                        <label htmlFor="age">Idade</label>
                        <input id="age" type="text" placeholder="Idade" { ...register('idade') }/>
                    </div>

                    <span className={errors.idade?.message ? styles['span-error'] : undefined}>{errors.idade?.message ? errors.idade.message : null}</span>
                </div>

                <div className={styles['div-input']}>
                    <div className={styles['container-input']}>
                        <label htmlFor="address">Endereço</label>
                        <input id="address" type="text" placeholder="Rua Fagundes, 58" { ...register('endereco') }/>
                    </div>

                    <span className={errors.endereco?.message ? styles['span-error'] : undefined}>{errors.endereco?.message ? errors.endereco.message : null}</span>
                </div>
            </div>

            <Link href={"login"} className={styles['link-login']}>Já possui uma conta? Faça o seu login</Link>

            <button type="submit" className={styles['btn-cadastro']}>Cadastre-se</button>
        </form>    
    )
}

export function FormDoctor() {
    const { register, handleSubmit, formState: { errors } } = useForm<iRegisterDoctor>({
        resolver: zodResolver(registerDoctorSchema),
    })

    const registerDoctor: SubmitHandler<iRegisterDoctor> = (registerData: iRegisterDoctor) => {
        console.log(registerData)
    };

    return (
        <form onSubmit={handleSubmit(registerDoctor)} className={styles.formulario}>
            <div className={styles['div-inputs']}>
                <div className={styles['div-input']}>
                    <div className={styles['container-input']}>
                        <label htmlFor="name">Nome</label>
                        <input id="name" type="text" placeholder="Nome Completo" { ...register('nome') }/>
                    </div>

                    <span className={errors.nome?.message ? styles['span-error'] : undefined}>{errors.nome?.message ? errors.nome.message : null}</span>
                </div>

                <div className={styles['div-input']}>
                    <div className={styles['container-input']}>
                        <label htmlFor="mail">Email</label>
                        <input id="mail" type="email" placeholder="joao123@gmail.com" { ...register('email') }/>
                    </div>

                    <span className={errors.email?.message ? styles['span-error'] : undefined}>{errors.email?.message ? errors.email.message : null}</span>
                </div>

                <div className={styles['div-input']}>
                    <div className={styles['container-input']}>
                        <label htmlFor="password">Senha</label>
                        <input id="password" type="password" placeholder="Senha" { ...register('senha') }/>
                    </div>

                    <span className={errors.senha?.message ? styles['span-error'] : undefined}>{errors.senha?.message ? errors.senha.message : null}</span>
                </div>

                <div className={styles['div-input']}>
                    <div className={styles['container-input']}>
                        <label htmlFor="cpf">CPF</label>
                        <input id="cpf" type="text" placeholder="CPF" { ...register('cpf') }/>
                    </div>

                    <span className={errors.cpf?.message ? styles['span-error'] : undefined}>{errors.cpf?.message ? errors.cpf.message : null}</span>
                </div>

                <div className={styles['div-input']}>
                    <div className={styles['container-input']}>
                        <label htmlFor="crm"></label>
                        <input id="crm" type="text" placeholder="Idade" { ...register('crm') }/>
                    </div>

                    <span className={errors.crm?.message ? styles['span-error'] : undefined}>{errors.crm?.message ? errors.crm.message : null}</span>
                </div>

                <div className={styles['div-input']}>
                    <div className={styles['container-input']}>
                        <label htmlFor="address">Endereço</label>
                        <input id="address" type="text" placeholder="Rua Fagundes, 58" { ...register('endereco') }/>
                    </div>

                    <span className={errors.endereco?.message ? styles['span-error'] : undefined}>{errors.endereco?.message ? errors.endereco.message : null}</span>
                </div>


                <div className={styles['div-input']}>
                    <div className={styles['container-input']}>
                        <label htmlFor="state">Estado</label>
                        <input id="state" type="text" placeholder="São Paulo" { ...register('estado') }/>
                    </div>

                    <span className={errors.estado?.message ? styles['span-error'] : undefined}>{errors.estado?.message ? errors.estado.message : null}</span>
                </div>


                <div className={styles['div-input']}>
                    <div className={styles['container-input']}>
                        <label htmlFor="city">Cidade</label>
                        <input id="city" type="text" placeholder="Cidade" { ...register('cidade') }/>
                    </div>

                    <span className={errors.cidade?.message ? styles['span-error'] : undefined}>{errors.cidade?.message ? errors.cidade.message : null}</span>
                </div>


                <div className={styles['div-input']}>
                    <div className={styles['container-input']}>
                        <label htmlFor="postalCode">CEP</label>
                        <input id="postalCode" type="text" placeholder="12589900" { ...register('cep') }/>
                    </div>

                    <span className={errors.cep?.message ? styles['span-error'] : undefined}>{errors.cep?.message ? errors.cep.message : null}</span>
                </div>
            </div>

            <Link href={"login"} className={styles['link-login']}>Já possui uma conta? Faça o seu login</Link>

            <button type="submit" className={styles['btn-cadastro']}>Cadastre-se</button>
        </form>    
    )
}