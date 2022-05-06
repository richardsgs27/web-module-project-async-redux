import React from 'react'

const University = (props) => {
    const {university} = props

    return (<div class="university">
        <h3>{university.name}</h3>
        <p>{university.web_pages}</p>

    </div>)
}

export default University