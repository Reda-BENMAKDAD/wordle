import React from "react";
import { render, screen } from '@testing-library/react';
import KeyBoardKey from "./KeyBoardKey";

describe("KeyBoardKey", () => {
  test("matches snapshot", () => {
    render(<KeyBoardKey kbkey="A" className="" onClick={undefined}/>);
   expect(screen).toMatchSnapshot();
  });
});
