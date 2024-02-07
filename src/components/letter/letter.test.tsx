import React from "react";
import { render, screen } from '@testing-library/react';
import Letter from "./letter";

describe("Letter", () => {
  test("matches snapshot", () => {
    render(<Letter letter="A"/>);
   expect(screen).toMatchSnapshot();
  });
});
