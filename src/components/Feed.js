import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {Client} from '../Client'
import { searchQuery, feedQuery } from '../utils/data'
import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'

function Feed() {
  
  const [loading, setLoading] = useState(false)
  const [pins, setPins] = useState(null)
  const {categoryId} = useParams()

  useEffect(() =>{
    setLoading(true)
    if(categoryId){
      const query = searchQuery(categoryId)
      Client.fetch(query)
      .then((data) => {
        setPins(data)
        setLoading(false)
      })
    }else{
      Client.fetch(feedQuery)
      .then((data) => {
        setPins(data)
        setLoading(false)
      })
    }
  }, [categoryId])

  if(loading) return <Spinner message="adding new ideas to the feed!" />

  if(!pins?.length) return <h2>No pins availble</h2>

  return (
    <div>
      {pins && <MasonryLayout pins={pins} />}
    </div>
  )
}

export default Feed