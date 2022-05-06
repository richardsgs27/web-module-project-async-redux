import React from 'react'
import {connect} from 'react-redux'
import University from './University'

const UniversityList = props => {
    const {universities} = props;

    return (<div id="universityList">
        {
        universities?.map(university => {
                return(
                    <University university={university}/>
                )
            })
        }
    </div>
    )
}

const mapStateToProps = state => {
    return {
        universities: state.universities
    }
}

export default connect(mapStateToProps)(UniversityList)