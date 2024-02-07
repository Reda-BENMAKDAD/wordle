import React from "react";
import { render, screen } from '@testing-library/react';
import Navbar from "./navbar";

describe("Navbar", () => {
  test("matches snapshot", () => {
    render(<Navbar />);
   expect(screen).toMatchSnapshot();
  });
});
