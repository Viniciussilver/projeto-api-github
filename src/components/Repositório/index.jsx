import React, { useEffect, useState } from "react"
import { Typography } from "../../containers/Home/style"
import { FilterRepository } from "../../utils/filter"

import * as C from "./style"

const Repository = () => {
  const [data, setData] = useState("")

  const filter = async (e) => {
    const response = await FilterRepository(e)
    setData(response)
  }

  useEffect(() => {
    const getRepositories = async () => {
      const response = await FilterRepository("Todos")
      setData(response)
    }
    getRepositories()
  }, [])
  return (
    <C.Container>
      <div className="section-filter">
        <Typography>Filtrar por tecnologias</Typography>
        <select onChange={(e) => filter(e.target.value)}>
          <option value="Todos">Todos</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="PHP">PHP</option>
          <option value="Python">Python</option>
        </select>
      </div>

      <div className="container-repositories">
        {data &&
          data.map((item) => (
            <div className="container-item" key={item.id}>
              <Typography fontWeight="300" size="17px">
                {item.name}
              </Typography>

              <div className="box-info">
                {item.language ? (
                  <Typography size="14px" fontWeight="500">
                    {item.language}
                  </Typography>
                ) : (
                  ""
                )}
                <a target="_blank" href={item.html_url}>
                  VER
                </a>
              </div>
            </div>
          ))}
      </div>
    </C.Container>
  )
}

export default Repository
