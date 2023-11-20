import { z } from "zod"

const registerPatienteSchema = z.object({
    nome: z.string().nonempty('Nome obrigatório').max(150, 'Máximo de 150 caracteres'),
    email: z.string().nonempty('E-mail obrigatório').email('Forneça um e-mail válido').max(80, 'Máximo de 80 caracteres'),
    senha: z.string()
    .min(8, "A senha precisa conter pelo menos 8 caracteres")
    .nonempty("A senha é obrigatória")
    .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caracter especial")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula"),
    cpf: z.string().nonempty('O CPF é obrigatório').min(11, 'Mínimo de 11 dígitos').max(11, 'Máximo de 11 dígitos'),
    idade: z.string().nonempty("Idade obrigatória").max(3, 'Máximo de 3 dígitos'),
    endereco: z.string().nonempty('Endereço obrigatório').min(6, 'Exemplo: Rua Fagundes, 58').max(80, 'Máximo de 80 caracteres')
})


const registerDoctorSchema = z.object({
    nome: z.string().nonempty('Nome obrigatório').max(150, 'Máximo de 150 caracteres'),
    email: z.string().nonempty('E-mail obrigatório').email('Forneça um e-mail válido').max(80, 'Máximo de 80 caracteres'),
    senha: z.string()
    .min(8, "A senha precisa conter pelo menos 8 caracteres")
    .nonempty("A senha é obrigatória")
    .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caracter especial")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula"),
    cpf: z.string().nonempty('O CPF é obrigatório').min(8, 'Mínimo de 11 dígitos').max(11, 'Máximo de 11 dígitos'),
    crm: z.string().nonempty('O CPF é obrigatório').min(4, 'Mínimo de 4 dígitos').max(15, 'Máximo de 15 dígitos'),
    idade: z.string().nonempty("Idade obrigatória").max(3, 'Máximo de 3 dígitos'),
    endereco: z.string().nonempty('Endereço obrigatório').min(6, 'Exemplo: Rua Fagundes, 58').max(80, 'Máximo de 80 caracteres'),
    estado: z.string().nonempty('Estado obrigatório'),
    cidade: z.string().nonempty('Cidade obrigatória'),
    cep: z.string().nonempty('CEP obrigatório').min(8, 'Mínimo de 8 dígitos').max(8, 'Máximo de 8 dígitos')
})

export {
    registerPatienteSchema,
    registerDoctorSchema,
}