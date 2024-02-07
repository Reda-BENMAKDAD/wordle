import React from "react";
import { render, screen } from '@testing-library/react';
import Try from "./Try";

describe("Try", () => {
  test("matches snapshot", () => {
    render(<Try word="ABCDE"/>);
   expect(screen).toMatchSnapshot();
  });
});
