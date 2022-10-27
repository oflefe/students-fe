import NewStudentForm from "./NewStudentForm";
import { fireEvent, queryByTestId, render} from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom"
import "jest"
import axios from "axios";
import {API_URL} from "../constants";
jest.mock("axios")




describe("new student form", () => {


    axios.post.mockImplementation(url => {
        if(url === API_URL){
            return Promise.resolve({})
        }
    })

    it("has all the correct editable form fields", () => {
        const { getAllByRole} = render(<NewStudentForm resetState={() => {}} toggle={() => {}}/>)
        const inputs = getAllByRole("textbox")
        for(let i  =0; i<inputs.length-1; i++){
            if(i === 1) {
                fireEvent.change(inputs[i], {target: {value: "example@example.com"}})
                expect(inputs[i]).toHaveValue("example@example.com")
            }
            else if(i === 3){
                fireEvent.change(inputs[i], {target: {value: "456745674"}})
                expect(inputs[i]).toHaveValue("456745674")
            }
            else {

                fireEvent.change(inputs[i], {target: {value: "example"}})
                expect(inputs[i]).toHaveValue("example")
            }
        }
    })
    it("closes after sending", () => {
        jest.mock("axios")
        const {queryByTestId, getByText, getAllByRole} = render (<NewStudentForm resetState={()=>{}} toggle={()=>{}}/>)
        const form = queryByTestId("new-student-form")
        const button = getByText("Send")
        const inputs = getAllByRole("textbox")
        expect(form).toBeInTheDocument()
        expect(button).toBeInTheDocument()
        fireEvent.click(button)
        expect(form).toBeInTheDocument()
        expect(inputs[1]).toHaveValue("example@example.com")
        fireEvent.click(button)
        expect(axios.post).toHaveBeenCalled()
    })
})