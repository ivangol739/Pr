import { useState } from "react"
1

export const LikeButtonF = () => {
  const initialState = 0;

  const [likes, setLikes] = useState(initialState)

  const handleAddLike = () => {
    setLikes(likes + 1)
  }
  return (
    <button onClick={handleAddLike}>{`Likes ${likes}`}</button>
  )
}

2
export const LikeButtonF = () => {
  const initialState = {title: 'Some post', likes: 0};

  const [post, setPost] = useState(initialState)

  const handleAddLike = () => {
    setPost({...post, likes: post.likes + 1})
  }
  return (
    <>
      <h2>{post.title}</h2>
      <button onClick={handleAddLike}>{`Likes ${post.likes}`}</button>
    </>
  )
}

3
export const LikeButtonF = () => {
  
    const [cardView, setCardView] = useState(true)
  
    const handleCardView = () => {
        setCardView(!cardView)
    }

    return (
      <>
        <button onClick={handleCardView}>Switch view</button>
        <div>{cardView ? <div>Card view</div> : <div>Line view</div>}</div>
      </>
    )
  }
