import NewStudentForm from "./NewStudentForm";
import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import "jest";
import axios from "axios";
import { API_URL } from "../constants";
import userEvent from "@testing-library/user-event";
jest.mock("axios");

describe("new student form", () => {
  afterAll(cleanup);
  axios.post.mockImplementation((url) => {
    if (url === API_URL) {
      return Promise.resolve({});
    }
  });
  it("has all the correct editable form fields and closes after sending", () => {
    let { getByText, getAllByRole, queryByTestId } = render(
      <NewStudentForm
        resetState={() => {
          /**/
        }}
        toggle={() => {
          /**/
        }}
      />
    );
    let inputs = getAllByRole("textbox");
    for (let i = 0; i < inputs.length; i++) {
      if (i === 1) {
        userEvent.type(inputs[i], "example@example.com");
        expect(inputs[i]).toHaveValue("example@example.com");
      } else if (i === 3) {
        userEvent.type(inputs[i], "456745674");
        expect(inputs[i]).toHaveValue("456745674");
      } else {
        userEvent.type(inputs[i], "example");
        expect(inputs[i]).toHaveValue("example");
      }
    }

  });
  it("closes after sending", () => {
    jest.mock("axios");
    let { queryByTestId, getByText, getAllByRole } = render(
      <NewStudentForm
        resetState={() => {
          /**/
        }}
        toggle={() => {
          /**/
        }}
      />
    );
    const form = queryByTestId("new-student-form");
    const button = getByText("Send");
    let inputs = getAllByRole("textbox");
    expect(form).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    expect(form).toBeInTheDocument();
    expect(inputs[1]).toHaveValue("example@example.com");
    fireEvent.click(button);
    let state = {
      pk: 0,
      name: "example",
      email: "example@example.com",
      document: "example",
      phone: "456745674",
    };
    expect(axios.post).toHaveBeenCalledWith(API_URL, state);
  });
});

describe("edit-student-form", () => {
  it("edit-student renders fields filled out", () => {
    let student = {
      pk: 1,
      name: "exampleName",
      email: "exampleEmail@example.com",
      document: "exampleDoc",
      phone: "57589734937",
    };
    let valArray = Object.values(student);
    let { queryAllByRole } = render(
      <NewStudentForm
        student={student}
        resetState={() => {
          /**/
        }}
        toggle={() => {
          /**/
        }}
      />
    );
    let newInputs = queryAllByRole("textbox");
    for (let i = 0; i < newInputs.length; i++) {
      expect(newInputs[i]).toHaveAttribute("value", valArray[i + 1]);
    }
  });
});
