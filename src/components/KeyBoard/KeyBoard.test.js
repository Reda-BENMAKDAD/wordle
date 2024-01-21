import React from "react";
import { shallow } from "enzyme";
import KeyBoard from "./KeyBoard";

describe("KeyBoard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<KeyBoard />);
    expect(wrapper).toMatchSnapshot();
  });
});
