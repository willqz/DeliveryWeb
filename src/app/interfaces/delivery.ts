import { Cliente } from "./Cliente";
import { Motorista } from "./Motorista";

export interface Delivery {
    id: string;
    documento: string;
    motorista: Motorista;
    cliente_origem: Cliente;
    cliente_destino: Cliente;
    status_entrega: string;
}

