import React, { useEffect, useState } from 'react'
import httpInstance from '../axiosConfig/axiosConfig'
function DetailsShow(props) {
  const [detailsOfPara, setDetailsOfPara] = useState({})
  console.log(props);
  const details = props.match.params.postId
  const url = props.match.params.showUrl

  useEffect(()=>{
    fetchDetails()
  },[])

  const fetchDetails = async () => {
    try {
      const response = await httpInstance.get(`/${url}/${details}`)
      console.log(response);
      setDetailsOfPara(response.data)
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <p>FirstData: {detailsOfPara.id }</p>
      <p>secondData: {detailsOfPara.title}</p>

    </div>
  )
}

export default DetailsShow