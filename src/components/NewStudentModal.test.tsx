import NewStudentModal from "./NewStudentModal";
import { render, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import "jest";
import userEvent from "@testing-library/user-event";

describe("NewStudentModal", () => {
  it("new student button opens up new student form", () => {
    const { getByTestId, getByRole, queryByTestId, getAllByRole, getByText } =
      render(
        <NewStudentModal
          resetState={() => {
            /**/
          }}
          create={false}
        />
      );
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    const form = queryByTestId("new-student-form");
    expect(queryByTestId("new-student-form")).toBeNull();
    fireEvent.click(button);
    expect(getByTestId("new-student-form")).toBeInTheDocument();
    const sendButton = getByText("Send");
    const inputs = getAllByRole("textbox");
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
    userEvent.click(sendButton);
    expect(form).not.toBeInTheDocument();
  });
});
