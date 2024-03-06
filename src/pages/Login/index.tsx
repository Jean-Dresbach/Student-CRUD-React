/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FormEvent, useState } from "react"

import { Button, ButtonStyle, FormContainer, InputStyle, Title } from "./styles"
import { useNavigate } from "react-router-dom"
import { login } from "../../services/auth.service"

export function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    setData((prevState) => ({ ...prevState, [name]: value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      const { token, userId } = await login(data)

      localStorage.setItem("user", JSON.stringify({ token, userId }))

      navigate("/assessments")
    } catch (error: any) {
      console.log("Erro ao enviar formulário: ", error.message)
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Login</Title>

      <InputStyle
        placeholder="Digite seu e-mail..."
        name="email"
        value={data.email}
        onChange={handleChange}
      />

      <InputStyle
        placeholder="Digite sua senha..."
        name="password"
        value={data.password}
        onChange={handleChange}
      />

      <Button>Login</Button>
    </FormContainer>
  )
}
