import React from 'react'

function Home(props) {
    console.log(props);
    const goToList = (data) => {
        props.history.push(data)
    }
    return (
        <div>

            <p onClick={() => { goToList('posts') }}>Posts</p>
            <p onClick={() => { goToList('comments') }}>Comments</p>
            <p onClick={() => { goToList('albums') }}>albums</p>
            <p onClick={() => { goToList('photos') }}>photos</p>
            <p onClick={() => { goToList('todos') }}>todos</p>
            <p onClick={() => { goToList('users') }}>users</p>
        </div>
    )
}

export default Home