import React from "react";
import { shallow } from "enzyme";
import { Test1 } from "./Test1";
it("No render if is empty", () => {
  const wrapper = shallow(<Test1 list={[]} />);
  expect(wrapper.find(".Lista").length).toBe(0);
});
