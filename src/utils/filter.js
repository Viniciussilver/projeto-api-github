import api from "../services/api"

export const GetUser = async (e) => {
  const userSaved = await localStorage.getItem("user")
  const userName = JSON.parse(userSaved)

  if(e)
  {
  const { data: response } = await api.get(`${userName}`)
  return response
  } else {
    const { data: response } = await api.get(`${userName}/repos`)
    return response
  }
  
  
}

export const FilterRepository = async (prop) => {
    let data;

    if(!data){
        data = await GetUser(false) 
    }
  if (prop == "Todos") {
    return data
  }

  const filterLanguage = data.filter((res) => res.language == prop)
  return filterLanguage
}
