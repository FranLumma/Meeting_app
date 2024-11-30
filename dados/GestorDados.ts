import AsyncStorage from "@react-native-async-storage/async-storage";
import { Fornecedor } from "./Fornecedor";

const salvarFornecedor = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (err) {}
};
const removerFornecedor = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {}
};
const obterFornecedorJSON = async () => {
  try {
    let keys = await AsyncStorage.getAllKeys();
    return await AsyncStorage.multiGet(keys);
  } catch (err) {
    return [];
  }
};
const obterFornecedor = async () => {
  try {
    let obj: Array<Fornecedor> = [];
    let objJSON = await obterFornecedorJSON();
    if (objJSON != null && objJSON.length > 0) {
      objJSON.forEach((element) => {
        let fornecedor: Fornecedor = JSON.parse(element[1]);
        obj.push(fornecedor);
      });
      return obj;
    }
  } catch (err) {
    return [];
  }
};

const obterFornecedorbyId = async (key: string) => {
  try {
    let data = await AsyncStorage.getItem(key);
    return data != null ? JSON.parse(data) : null;
  } catch (err) {
    return [];
  }
};

export default class GestorDados {
  public async remover(chave: number) {
    removerFornecedor(chave.toString());
  }
  public async adicionar(fornecedor: Fornecedor) {
    salvarFornecedor(fornecedor._id.toString(), fornecedor);
  }
  public async obterTodos(): Promise<Array<Fornecedor>> {
    let lista: Array<Fornecedor> = await obterFornecedor();
    return lista;
  }
  public async obterPorId(chave: string) {
    let dados: Array<Fornecedor> = await obterFornecedorbyId(chave);
    return dados;
  }
}
