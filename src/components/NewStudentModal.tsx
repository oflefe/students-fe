import { Fragment, useState} from "react";
import * as React from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewStudentForm, {studentInterface} from "./NewStudentForm";

interface propInterface{
    create: boolean,
    student?: studentInterface
    resetState: () => void,
}


function NewStudentModal(props: propInterface) {

    const [state, setState] = useState({modal: false})


    const toggle = () => {
        setState(prevState => ({
            modal: !prevState.modal
        }))
    }
    const create = props.create
    let title = "Editing Student";
    let button = <Button onClick={toggle}>Edit</Button>
    if(create){
        title = "Creating New Student"
        button = (<Button
            color="primary"
            className="float-right"
            onClick={toggle}
            style={{ minWidth: "200px" }}
        >
            Create New
        </Button>)
    }
    return (
        <Fragment>
            {button}
            <Modal data-testid="modal" isOpen={state.modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    <NewStudentForm

                        resetState={props.resetState}
                        toggle={toggle}
                        student={props.student ? props.student : undefined}
                    />
                </ModalBody>
            </Modal>
        </Fragment>
    );
}

export default NewStudentModal;