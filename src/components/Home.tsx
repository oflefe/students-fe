import  { useEffect, useState} from "react";
import { Col, Container, Row } from "reactstrap";
import * as React from "react";
import NewStudentModal from "./NewStudentModal";
import axios from "axios";
import {API_URL} from "../constants";
import StudentList from "./StudentList";



function Home() {

    const [state, setState] = useState({students: []})
    useEffect(() => {
        const resetState = () => {
            getStudents()
        }
        resetState()
    },[])
    const getStudents = () => {
        axios.get(API_URL)
            .then(res => {
                setState({students: res.data})
            })
    }


    return (
        <Container style={{ marginTop: "20px" }}>
            <Row>
                <Col>
                    <StudentList
                        students={state.students}
                        resetState={getStudents}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <NewStudentModal create={true} resetState={getStudents} />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;