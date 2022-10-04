import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { GetUser } from "../../utils/filter"
import { Typography } from "../../containers/Home/style"
import * as C from "./style"

const Profile = () => {
  const [data, setData] = useState("")
  const navigate = useNavigate()

  let linkBlog

  if (data.blog) {
    linkBlog =
      data.blog.length > 37 ? `${data.blog.slice(0, 35)}...` : data.blog
  }

  useEffect(() => {
    const getUser = async () => {
      if (!localStorage.getItem("user")) {
        return navigate("/")
      }

      const response = await GetUser(true)

      setData(response)
      // localStorage.removeItem("user")
    }

    getUser()
  }, [])

  return (
    <C.Container>
      {data ? (
        <div className="container-item">
          <img
            className="image-perfil"
            src={data.avatar_url}
            alt="Foto de perfil"
          />

          <div className="item-nome-usuario">
            <Typography size="23px" fontWeight="400">
              {data.name}
            </Typography>
            <Typography primary="#a2a2ad" fontWeight="300" size="18px">
              {data.login}
            </Typography>
          </div>

          <div className="container-bio">
            {data.bio ? (
              <p className="item-bio">
                <C.IconBio />
                <span>{data.bio}</span>
              </p>
            ) : (
              " "
            )}
            <p className="item-bio">
              <C.IconFollowers /> Seguidores {data.followers} - Seguindo{" "}
              {data.following}
            </p>
            {data.location ? (
              <p className="item-bio">
                <C.IconLocation /> {data.location}
              </p>
            ) : (
              " "
            )}
            {data.blog ? (
              <p className="item-bio">
                <C.IconLink />{" "}
                <a
                  target="_blank"
                  href={
                    data.blog.includes("https://")
                      ? data.blog
                      : `https://${data.blog}`
                  }
                >
                  {linkBlog}
                </a>
               
              </p>
            ) : (
              " "
            )}
          </div>
          <Link className="link-home" to="/">
            Voltar
          </Link>
        </div>
      ) : (
        <div className="loading">
          <p>Carregando...</p>
        </div>
      )}
    </C.Container>
  )
}

export default Profile
