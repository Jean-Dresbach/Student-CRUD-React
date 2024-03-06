import { IData, LoginResponse } from "../types/auth"
import { api } from "./api.service"

export async function login(data: IData): Promise<LoginResponse> {
  try {
    const response = await api.post("/login", data)

    return response.data
  } catch (error) {
    throw new Error("Erro ao fazer login. Verifique suas credenciais.")
  }
}
