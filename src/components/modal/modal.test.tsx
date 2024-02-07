import React from "react";
import { render, screen } from '@testing-library/react';
import Modal from "./modal";

describe("Modal", () => {
  test("matches snapshot", () => {
    render(<Modal message="Test String"/>);
    expect(screen).toMatchSnapshot();
  });
});
