import { Producto } from "./product.interface";

export default interface Usuario{
    id?: String;
    nombre: String;
    password: String;
    mailOrPhone?: String;
    cesta: (Producto | null)[]
}