/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"

import { Student } from "../../types/students"
import { api } from "../../services/api.service"
import { Card, Main, Title } from "./styles"

export function Student() {
  const [students, setStudents] = useState<Student[]>([])

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await api.get("/students")
        console.log(response)

        setStudents(response.data.data)
      } catch (error: any) {
        console.log("Erro ao carregar alunos: ", error.message)
      }
    }

    fetchStudents()
  }, [])

  return (
    <Main>
      <Title>Alunos</Title>
      <ul>
        {students.map((student) => (
          <Card key={student.id}>
            <div>
              <p>
                <strong>Nome:</strong> {student.name}
              </p>
              <p>
                <strong>Idade:</strong> {student.age}
              </p>
            </div>
            <hr />
            <p>
              <strong>E-mail:</strong> {student.email}
            </p>
          </Card>
        ))}
      </ul>
    </Main>
  )
}
