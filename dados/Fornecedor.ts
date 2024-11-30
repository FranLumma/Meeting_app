export class Fornecedor {
  _id: string;
  image: string;
  nome: string;
  endereco: string;
  contato: string;
  categoria: string;
  constructor(
    _id: string,
    image: string,
    nome: string,
    endereco: string,
    contato: string,
    categoria: string
  ) {
    this._id = _id;
    this.image = image;
    this.nome = nome;
    this.endereco = endereco;
    this.contato = contato;
    this.categoria = categoria;
  }
}
