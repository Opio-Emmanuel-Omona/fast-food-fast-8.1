import React from "react";
import Footer from "./index";
import { shallow } from "enzyme";

describe("Footer", () => {
    it("should render the element", () => {
      const wrapper = shallow(<Footer />);
      const component = wrapper.find("#footer");
      expect(component.length).toEqual(1);
    });
});
