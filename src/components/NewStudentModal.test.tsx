import NewStudentModal from "./NewStudentModal";
import { render, fireEvent} from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom"
import "jest"

describe('NewStudentModal', () => {
    it("new student button opens up new student form", () => {
        const { getByText, getByRole } = render(<NewStudentModal resetState={() => {}} create={false}/>)
        expect(getByRole("form")).not.toBeInTheDocument()

    })
});


