import NewStudentModal from "./NewStudentModal";
import { render, fireEvent} from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom"
import "jest"

describe('NewStudentModal', () => {
    it("new student button opens up new student form", () => {
        const { getByTestId, getByRole, queryByTestId } = render(<NewStudentModal resetState={() => {}} create={false}/>)
        const button = getByRole("button")
        expect(button).toBeInTheDocument()
        expect(queryByTestId("new-student-form")).toBeNull()
        fireEvent.click(button)
        expect(getByTestId("new-student-form")).toBeInTheDocument()
    })
});


