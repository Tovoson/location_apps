import axios from 'axios'

export const fetchData = async(setList, setIsLoading) => {
    try {
        setIsLoading(true)
        const reponse = await axios.get("http://127.0.0.1:8000/appart/liste/")
        setList(reponse.data)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
}

export const addData = async(data) => {
  try{
       const reponse = axios.post("http://127.0.0.1:8000/appart/liste/", data, {
        headers:{
          'Content-Type': 'application/json'
        }
       })

       console.log(reponse.data)

  } catch(err){
    console.log(err)
  }
}

export const updateData = async(data) => {
  try{
       const reponse = axios.put(`http://127.0.0.1:8000/appart/liste/${data.id}/`, data, {
        headers:{
          'Content-Type': 'application/json'
        }
       })

       console.log(reponse.data)

  } catch(err){
    console.log(err)
  }
}

export const deleteService = async(data) => {
  try{
       const reponse = axios.delete(`http://127.0.0.1:8000/appart/liste/${data}/`, {
        headers:{
          'Content-Type': 'application/json'
        }
       })

       console.log(reponse.data)

  } catch(err){
    console.log(err)
  }
}