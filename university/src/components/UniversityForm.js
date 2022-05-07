
import {connect} from 'react-redux'
import { useState } from 'react';
import { getUniversities } from '../actions';

const UniversityForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    props.getUniversities(searchTerm)
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
      <button>Search</button>
    </form>
  );
};

export default connect(null, {getUniversities})(UniversityForm);
