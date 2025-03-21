export interface Plaga {
    id: string;
    nombre: string;
    tipo: TipoPlaga;
    huéspedes_comunes: string;
    síntomas: string;
    control: string;
    imagen?: string; 
}

export enum TipoPlaga {
    Insecto = "Insecto",
    Ácaro = "Ácaro",
    Molusco = "Molusco",
    Gusano = "Gusano"
}