import { connect } from "react-redux";
import "./App.css";
import { useEffect } from "react";

import { onStart, onSuccess } from "./actions";
import UniversityList from "./components/UniversityList";
import UniversityForm from "./components/UniversityForm";
import axios from "axios";


function App(props) {
  const { loading, error } = props;

  useEffect(() => {
    props.onStart();
    axios
      .get(`http://universities.hipolabs.com/search?country=United+States`)
      .then((res) => {
        props.onSuccess(res.data.data);
      });
  }, []);
  return (
    <div className="App">
      <h1>Search for Universities by Country</h1>

      <UniversityForm />
      {error !== "" && <h3>{error}</h3>}
      {loading ? <h4>LOADING...</h4> : <UniversityList />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};


export default connect(mapStateToProps, { onStart, onSuccess })(App);
