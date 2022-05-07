import { connect } from "react-redux";
import "./App.css";
import { useEffect } from "react";

import { getUniversities } from "./actions";

import UniversityList from "./components/UniversityList";
import UniversityForm from "./components/UniversityForm";




function App(props) {
  const { loading, error, getUniversities } = props;

  useEffect(() => {
    getUniversities('Chile')
  }, []);

 
  return (
    <div className="App">
      <h1>Search for Universities by Country</h1>

      <UniversityForm />
      {error !== "" && <h3>{error}</h3>}
      {loading ? <h4>LOADING...</h4> : <UniversityList/>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};


export default connect(mapStateToProps, {getUniversities})(App);
