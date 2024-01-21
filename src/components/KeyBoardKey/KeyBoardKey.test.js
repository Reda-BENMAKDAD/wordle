import React from "react";
import { shallow } from "enzyme";
import KeyBoardKey from "./KeyBoardKey";

describe("KeyBoardKey", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<KeyBoardKey />);
    expect(wrapper).toMatchSnapshot();
  });
});
