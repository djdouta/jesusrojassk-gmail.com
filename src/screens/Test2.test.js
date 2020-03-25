import React from "react";
import { shallow } from "enzyme";
import { Test2 } from "./Test2";
import IncrementButton from "../components/test2/IncrementButton";

it("0 init value", () => {
  const wrapper = shallow(<Test2 count={0} />);
  const count = wrapper.find("#count").text();

  expect(count).toBe("0");
});
