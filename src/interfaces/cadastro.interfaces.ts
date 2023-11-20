export interface iRegisterPatient {
    nome: string;
    email: string;
    senha: string;
    cpf: string;
    idade: string;
    endereco: string;
}

export interface iRegisterDoctor {
    nome: string;
    email: string;
    senha: string;
    cpf: string;
    crm: string;
    endereco: string;
    estado: string;
    cidade: string;
    cep: string;
}