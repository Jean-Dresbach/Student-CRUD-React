import { Assessment } from "../types/assessment"
import { api } from "./api.service"

export async function getAssessments(
  token: string,
  userId: string
): Promise<Assessment[]> {
  try {
    const response = await api.get(`/students/${userId}/assessments`, {
      headers: {
        Authorization: token
      }
    })

    return response.data.data
  } catch (error) {
    throw new Error("Erro ao buscar avaliações")
  }
}
