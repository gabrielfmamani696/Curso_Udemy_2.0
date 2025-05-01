import { Client } from "./client";
import { Company } from "./company";
import { Item } from "./item";

export class Invoice {
    id!: number;
    name!: string;
    client!: Client;
    company!: Company;
    items!: Item[];// este atributo sera de tipo arrgeglo

}