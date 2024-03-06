/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"

import { Assessment } from "../../types/assessment"
import { useNavigate } from "react-router-dom"
import { getAssessments } from "../../services/assessment.service"
import { Button, Card, Main, Title } from "./styles"

export function AssessmentList() {
  const navigate = useNavigate()
  const [assessments, setAssessments] = useState<Assessment[]>([])

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const userStorage = localStorage.getItem("user")
        const { token, userId } = JSON.parse(userStorage || "{}")

        if (!token) navigate("/login")

        const assessments = await getAssessments(token, userId)

        setAssessments(assessments)
      } catch (error: any) {
        console.log("Erro ao carregar alunos: ", error.message)
      }
    }

    fetchAssessments()
  }, [navigate])

  return (
    <Main>
      <Title>Avaliações</Title>
      <ul>
        {assessments.map((assessment) => (
          <Card key={assessment.id}>
            <div>
              <p>
                <strong>Disciplina:</strong> {assessment.discipline}
              </p>
              <p>
                <strong>Nota:</strong> {assessment.grade}
              </p>
            </div>
            <hr />
            <Button>Excluir</Button>
          </Card>
        ))}
      </ul>
    </Main>
  )
}
