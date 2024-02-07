import React from "react";
import { render, screen } from '@testing-library/react';
import KeyBoard from "./KeyBoard";

describe("KeyBoard", () => {
  test("matches snapshot", () => {
    render(<KeyBoard onKeyClick={(key: string)=>{}} />);
   expect(screen).toMatchSnapshot();
  });
});
