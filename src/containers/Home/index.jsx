import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { Typography } from "./style"
import * as C from "./style"
import api from "../../services/api"

const Home = () => {
  const [value, setValue] = useState("")
  const navigate = useNavigate()

  const checkUser = async () => {
    if (!value) {
      return toast.error("Preencha algum nome !")
    }

    await toast.promise(api.get(`${value}`), {
      pending: "Verificando...",
      success: "Sucesso",
      error: "Usúario não encontrado",
    })

    localStorage.setItem("user", JSON.stringify(value))

    setTimeout(() => {
      navigate("/usuario")
    }, 1100)
  }

  return (
    <C.Container>
      <Typography size="30px" lineHeight="35px">
        GitHub Api
      </Typography>
      <div className="container-item">
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Usuário"
        />
        <button onClick={() => checkUser()}>
          <C.IconSearch />
        </button>
      </div>
    </C.Container>
  )
}

export default Home
