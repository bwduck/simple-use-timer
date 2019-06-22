import React from "react";
import { configure, mount } from "enzyme";
import useTimer from "../src/simple-use-timer";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let realDate;

describe("useTimer", () => {
  beforeAll(() => {
    realDate = Date.now.bind(global.Date);
  });

  afterAll(() => {
    Date.now = realDate;
  });

  it("Returns the elapsed time", () => {
    global.Date.now = jest
      .fn()
      .mockReturnValueOnce(100)
      .mockReturnValueOnce(123);
    const check = jest.fn();

    const Test = () => {
      const [startTimer, getElapsedTime] = useTimer();
      startTimer();
      check(getElapsedTime());
      return null;
    };

    mount(<Test />);
    expect(check).toBeCalledWith(23);
  });
});
