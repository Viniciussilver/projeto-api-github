import React, { useEffect, useState } from 'react'
import { Typography } from '../../containers/Home/style'
import { FilterRepository } from '../../utils/filter'

import * as C from './style'

import { Ring, LineWobble } from '@uiball/loaders'

const colorsLanguage = {
  HTML: 'red',
  CSS: '#0068ba',
  JavaScript: 'yellow',
  TypeScript: '#2f74c0',
  PHP: '#7377ad',
  Python: '#3c78a8',
}

const Repository = () => {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false)

  const filter = async e => {
    const response = await FilterRepository(e)
    setData(response)
  }

  useEffect(() => {
    const getRepositories = async () => {
      setLoading(true)
      const response = await FilterRepository('Todos')
      setData(response)
      setLoading(false)
    }
    getRepositories()
  }, [])
  return (
    <C.Container>
      <div className="section-filter">
        <Typography>Filtrar por tecnologias</Typography>
        <select onChange={e => filter(e.target.value)}>
          <option value="Todos">Todos</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="PHP">PHP</option>
          <option value="Python">Python</option>
        </select>
      </div>

      <div className="container-repositories">
        {data &&
          data.map(item => (
            <C.ContainerItem
              borderColor={colorsLanguage[item.language]}
              className="container-item"
              key={item.id}
            >
              <Typography fontWeight="300" size="17px">
                {item.name}
              </Typography>

              <div className="box-info">
                {item.language ? (
                  <Typography size="14px" fontWeight="500">
                    {item.language}
                  </Typography>
                ) : (
                  ''
                )}
                <a target="_blank" href={item.html_url}>
                  VER
                </a>
              </div>
            </C.ContainerItem>
          ))}

        {loading && (
          <div className="container-loading">
            <Ring size={50} lineWeight={5} speed={2} color="#fff" />
          </div>
        )}
      </div>
    </C.Container>
  )
}

export default Repository
