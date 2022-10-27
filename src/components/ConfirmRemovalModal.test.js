import ConfirmRemovalModal from "./ConfirmRemovalModal";
import { fireEvent, render } from "@testing-library/react";
import "jest"
import React from "react"
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import axios from "axios"
jest.mock("axios")


describe("removal pop up", () => {
    axios.delete.mockImplementation(() => {
        return Promise.resolve({})
    })
    it("displays correct heading", () => {
        const {queryByRole,getByText} = render(<ConfirmRemovalModal resetState={()=>{}} pk={1}/>)
        const removeButton = getByText("Remove")
        userEvent.click(removeButton)
        const heading = queryByRole("heading")
        const confirmButton = getByText("Yes")
        const cancelButton= getByText("Cancel")
        expect(heading).toHaveTextContent("Do you really wanna delete the student?")
        userEvent.click(cancelButton)
        userEvent.click(removeButton)
        userEvent.click(confirmButton)
        expect(axios.delete).toHaveBeenCalled()
    })
})

