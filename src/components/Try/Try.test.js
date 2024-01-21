import React from "react";
import { shallow } from "enzyme";
import Try from "./Try";

describe("Try", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Try />);
    expect(wrapper).toMatchSnapshot();
  });
});
