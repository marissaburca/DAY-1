import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import {MdFavorite} from 'react-icons/md'
import { handleSubmitAction } from "../redux/actions";
import { useDispatch, useSelector} from "react-redux";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch()
  const jobsFromReduxStore = useSelector((state) => state.jobs.list)
  console.log(jobsFromReduxStore)

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleSubmitAction(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className=" d-flex align-items-center mx-auto my-3">
          <h1 className="display-1 d-inline">Remote Jobs Search</h1>
          <Link to='/Favorites' className="fs-5 text-success nav-link border text-nowrap border-4 ms-5 px-2" ><MdFavorite/> See favorites</Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={ 
            handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobsFromReduxStore.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
