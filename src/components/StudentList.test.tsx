import StudentList from "./StudentList";
import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import "jest";

describe("StudentList", () => {
  it("studentlist displays correct test if array empty", () => {
    const { getAllByRole } = render(
      <StudentList
        resetState={() => {
          /**/
        }}
        students={[]}
      />
    );
    const tableRow = getAllByRole("row")[1];
    expect(tableRow).toHaveTextContent("Ops, no one here yet");
  });
  it("student list displays passed in array correctly", () => {
    const { getAllByRole } = render(
      <StudentList
        resetState={() => {
          /**/
        }}
        students={[
          {
            pk: 1,
            name: "name",
            email: "email",
            document: "document",
            phone: "phone",
          },
        ]}
      />
    );
    const tableRow = getAllByRole("row")[1];
    expect(tableRow).toHaveTextContent("nameemaildocumentphone");
  });
});
