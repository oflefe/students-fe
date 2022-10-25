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

    const [state, setState] = useState<studentInterface>(initialState)

    useEffect(() => {
        if(props.student){
            const {pk, name, document, email, phone} = props.student
            setState({pk, name, document, email, phone})
        }
        // eslint-disable-next-line
    },[])

    const createStudent = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        axios.post(API_URL, state)
            .then(() => {
            props.resetState()
            props.toggle()
        }
            )
    }
    const editStudent = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault()
        axios.put(API_URL + state.pk, state)
            .then (() => {
                props.resetState()
                props.toggle()
            })
    }



    return (
        <Form onSubmit={props.student ? editStudent : createStudent}>
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input
                    type="text"
                    name="name"
                    onChange={(e) => state.name = e.target.value}
                    defaultValue={state.name}
                />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email:</Label>
                <Input
                    type="email"
                    name="email"
                    onChange={(e) => state.email = e.target.value}
                    defaultValue={state.email}
                />
            </FormGroup>
            <FormGroup>
                <Label for="document">Document:</Label>
                <Input
                    type="text"
                    name="document"
                    onChange={(e) => state.document = e.target.value}
                    defaultValue={state.document}
                />
            </FormGroup>
            <FormGroup>
                <Label for="phone">Phone:</Label>
                <Input
                    type="text"
                    name="phone"
                    onChange={(e) => state.phone = e.target.value}
                    defaultValue={state.phone}
                />
            </FormGroup>
            <Button>Send</Button>
        </Form>
    );
}

export default NewStudentForm;