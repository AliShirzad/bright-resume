// test for slider
import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Slider } from "./index";

// Test description: RangeInput component

// Given a RangeInput component
// When rendered with a theme and variant
// And with a minimum value, maximum value, step, label, and marks
// Then it should render a range input with the correct props
// And the input should update its value when the user moves the slider
// And the input should call the onChange callback when its value changes
// And the input should display the correct label and marks
// And the input should be disabled when the disabled prop is true

const mockedOnChange = jest.fn();

const renderComponent = () => {
  const { baseElement } = render(
    <Slider onChange={mockedOnChange} value={0} />
  );
  return { baseElement };
};

describe("Slider Component", () => {
  it("should render successfully", () => {
    const { baseElement } = renderComponent();
    const slider = screen.getByRole("slider");    
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute("type", "range");
    expect(baseElement).toBeTruthy();
  });

  it("updates input value when user moves the slider", () => {
    const { baseElement } = renderComponent();    
    const input = screen.getByRole("slider");
    

    await drag(slider, {
      delta: {x: -100, y: 0},
    })

  // it("should render successfully", () => {
  //   const { baseElement } = renderComponent();
  //   const slider = screen.getByRole("slider");
  //   expect(slider).toBeInTheDocument();
  //   expect(slider).toHaveAttribute("type", "range");
  //   expect(baseElement).toBeTruthy();
  // });

  // it("shows input value after user type something", async () => {
  //   const RANGE = faker.datatype.number({ min: 0, max: 100 });
  //   renderComponent();
  //   const input = screen.getByRole("slider") as HTMLInputElement;
  //   await user.click(input);
  //   expect(input).toBeDefined();
  //   expect((input as HTMLInputElement).value).toBe(RANGE);
  //   expect(mockedOnChange).toHaveBeenCalled();
  //   expect(mockedOnChange).toHaveBeenCalledTimes(RANGE);
  // });

  // // ------------------------------
  // // ------------------------------
  // // ------------------------------

  // it("updates input value when user moves the slider", async () => {
  //   const RANGE = faker.datatype.number({ min: 0, max: 100 });
  //   const mockedOnChange = jest.fn();
  //   renderComponent();
  //   const input = screen.getByRole("slider");
  //   await user.click(input);
  //   await user.type(input, "{arrowright}", {
  //     pointerState: {
  //       pointer: {

  //       },
  //       type: "mouse",
  //     },
  //   });
  //   expect(input).toBeDefined();
  //   expect((input as HTMLInputElement).value).toBe(String(RANGE));
  //   expect(mockedOnChange).toHaveBeenCalled();
  //   expect(mockedOnChange).toHaveBeenCalledTimes(RANGE);
  // });

  // it("shows input value after user types something", async () => {
  //   const TEXT = faker.word.noun();
  //   const mockedOnChange = jest.fn();
  //   render(<RangeInput onChange={mockedOnChange} />);
  //   const input = screen.getByRole("slider");
  //   await userEvent.click(input);
  //   await userEvent.type(input, TEXT);
  //   expect(input).toBeDefined();
  //   expect((input as HTMLInputElement).value).toBe(TEXT);
  //   expect(mockedOnChange).toHaveBeenCalled();
  //   expect(mockedOnChange).toHaveBeenCalledTimes(TEXT.length);
  // });
});
