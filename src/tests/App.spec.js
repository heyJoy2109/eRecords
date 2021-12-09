import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./../App";
import { act } from "react-dom/test-utils";

describe("e_records test", () => {
  test("loads and displays greeting", () => {
    render(<App />);
    // expect to check app render successfully
    expect(screen.getByText("Add More Records")).toBeDefined();
  });

  test("Show Added Records when user click on it", () => {
    const { getByText } = render(<App />);
    fireEvent(
      getByText("Add More Records"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    // expect to validate it is performing click operation
    expect(getByText("Show Added Records")).toBeDefined();
  });

  test("Validate add record functionality", () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    // expect to check app render successfully
    expect(getByText("Add More Records")).toBeDefined();
    fireEvent(
      getByText("Add More Records"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    // expect to check click action on add more record button
    expect(getByText("Show Added Records")).toBeDefined();

    // expect to check Add button and text input field render successfully
    expect(getByText("Add")).toBeDefined();
    expect(getByText("Employee ID")).toBeDefined();
    expect(getByText("Employee Name")).toBeDefined();
    fireEvent.change(getByPlaceholderText("Type your employee Id"), {
      target: { value: "12345" },
    });
    fireEvent.change(getByPlaceholderText("Type your user name"), {
      target: { value: "Test User" },
    });

    fireEvent(
      getByText("Add"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    fireEvent(
      getByText("Show Added Records"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
  });
});
