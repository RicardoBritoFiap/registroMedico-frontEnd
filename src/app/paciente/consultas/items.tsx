'use client'
import styles from './style.module.scss'
import { PiTrashSimpleFill } from "react-icons/pi";

interface iItem {
    nome: string;
    data: string;
    horario: string;
}

interface iItemDoctor {
    nome: string;
    endereco: string;
    estado: string;
    cidade: string;
    cep: string;
}

export function Item({ nome, data, horario }: iItem) {
    return (
        <li className={styles.item}>
            <div>
                <span>{nome}</span>
                <span>{data}</span>
                <span>{horario}</span>
            </div>

            <button><PiTrashSimpleFill className={styles['icon-trash']} size='20px'/></button>
        </li> 
    )
}

export function ItemDoctor({ nome, endereco, estado, cidade, cep }: iItemDoctor) {
    return (
        <>
            <div className={styles['item-doctor']}>
                <h3>{nome}</h3>

                <p className={styles.address}>Endereço: {endereco}</p>
                <p className={styles.address}>Estado: {estado}</p>
                <p className={styles.address}>Cidade: {cidade}</p>
                <p className={styles.address}>CEP: {cep}</p>

                <div className={styles['box-select']}>
                    <label htmlFor="day">Dias de Atendimento</label>

                    <select name="dia" id='day'>
                    <option value="">---</option>
                        <option value="segunda">segunda</option>
                        <option value="terça">terça</option>
                        <option value="quarta">quarta</option>
                        <option value="quinta">quinta</option>
                        <option value="sexta">sexta</option>
                        <option value="sábado">sábado</option>
                    </select>
                </div>

                <div className={styles['box-select']} style={{marginTop: '10px'}}>
                    <label htmlFor="turn">Turno de Atendimento</label>

                    <select name="Turno" id='turn'>
                    <option value="">---</option>
                        <option value="segunda">Manhã</option>
                        <option value="terça">Tarde</option>
                        <option value="quarta">Noite</option>
                    </select>
                </div>

                <button className={styles['btn-send']}>Marcar Consulta</button>
            </div>
        </>
    )
}