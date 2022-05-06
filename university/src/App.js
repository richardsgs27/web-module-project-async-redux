import {connect} from 'react-redux'
import './App.css';
import UniversityList from './components/UniversityList'
import UniversityForm from './components/UniversityForm';
import data from './data/universities'

function App(props) {
  const {loading, error} = props

  
  return (
    <div className="App">
      <h1>Search for Universities by Country</h1>

      <UniversityForm/>
      {
      (error !== "") && <h3>{error}</h3>
  }
      {
        loading ? <h4>LOADING...</h4> : <UniversityList />
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps)(App);
