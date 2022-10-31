import  {useEffect, useState} from 'react';
import * as React from "react"
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";

const initialState = {
    pk: 0,
    name: "",
    email: "",
    document: "",
    phone: ""
}

export interface studentInterface {
    pk: number,
    name: string,
    email: string,
    document: string,
    phone: string
}

interface propInterface {
    resetState: () => void,
    student?: studentInterface,
    toggle: () => void
}

function NewStudentForm(props:propInterface) {

    const [student, setStudent] = useState<studentInterface>(initialState)

    useEffect(() => {
        if(props.student){
            const {pk, name, document, email, phone} = props.student
            setStudent({pk, name, document, email, phone})
        }
        // eslint-disable-next-line
    },[])

    const createStudent = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        axios.post(API_URL, student)
            .then(() => {
            props.resetState()
            props.toggle()
        })
        .catch((e) => {
            alert(e)
        })
    }
    const editStudent = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault()
        axios.put(API_URL + student.pk, student)
            .then (() => {
                props.resetState()
                props.toggle()
            })
            .catch((e) => {
                alert(e)
            })
    }



    return (
        <Form data-testid="new-student-form" onSubmit={props.student ? editStudent : createStudent}>
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input
                    type="text"
                    name="name"
                    onChange={(e) => student.name = e.target.value}
                    defaultValue={student.name}
                />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email:</Label>
                <Input
                    type="email"
                    name="email"
                    onChange={(e) => student.email = e.target.value}
                    defaultValue={student.email}
                />
            </FormGroup>
            <FormGroup>
                <Label for="document">Document:</Label>
                <Input
                    type="text"
                    name="document"
                    onChange={(e) => student.document = e.target.value}
                    defaultValue={student.document}
                />
            </FormGroup>
            <FormGroup>
                <Label for="phone">Phone:</Label>
                <Input
                    type="text"
                    name="phone"
                    onChange={(e) => student.phone = e.target.value}
                    defaultValue={student.phone}
                />
            </FormGroup>
            <Button>Send</Button>
        </Form>
    );
}

export default NewStudentForm;