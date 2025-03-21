export interface Plaga {
    id: string;
    nombre: string;
    tipo: TipoPlaga;
    huespedes_comunes: string;
    sintomas: string;
    control: string;
    imagen?: string; 
}

export enum TipoPlaga {
    Insecto = "Insecto",
    Ácaro = "Ácaro",
    Molusco = "Molusco",
    Gusano = "Gusano"
}