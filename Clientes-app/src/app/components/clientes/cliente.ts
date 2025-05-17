// Con !, le dices al compilador: "Confía en mí, esta variable no es nula en este punto"
export class Cliente {
  id!: number;
  nombre!: string;
  apellido!: string;
  createAt!: string;
  email!: string;
}
