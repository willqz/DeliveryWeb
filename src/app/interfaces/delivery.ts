import { Cliente } from "./cliente";
import { Motorista } from "./motorista";

export interface Delivery {
    id: string;
    documento: string;
    motorista: Motorista;
    cliente_origem: Cliente;
    cliente_destino: Cliente;
    status_entrega: string;
}

