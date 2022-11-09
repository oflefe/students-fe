import React from "react";
import { Table } from "reactstrap";
import NewStudentModal from "./NewStudentModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";
import {studentInterface} from "./NewStudentForm";

interface propInterface {
    students: studentInterface[],
    resetState: ()=> void
}

function StudentList(props: propInterface) {
    const students = props.students;
    return (
        <Table dark>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Document</th>
                <th>Phone</th>
                <th></th>
            </tr>
            </thead>
            <tbody data-testid="tbody">
            {!students || students.length <= 0 ? (
                <tr>
                    <td colSpan={6} align="center">
                        <b>Ops, no one here yet</b>
                    </td>
                </tr>
            ) : (
                students.map((student: studentInterface) => (
                    <tr key={student.pk}>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.document}</td>
                        <td>{student.phone}</td>
                        <td align="center">
                            <NewStudentModal
                                create={false}
                                student={student}
                                resetState={props.resetState}
                            />
                            &nbsp;&nbsp;
                            <ConfirmRemovalModal
                                pk={student.pk}
                                resetState={props.resetState}
                            />
                        </td>
                    </tr>
                ))
            )}
            </tbody>
        </Table>
    );
}

export default StudentList;