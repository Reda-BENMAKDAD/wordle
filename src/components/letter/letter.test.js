import React from "react";
import { shallow } from "enzyme";
import Letter from "./letter";

describe("Letter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Letter />);
    expect(wrapper).toMatchSnapshot();
  });
});
