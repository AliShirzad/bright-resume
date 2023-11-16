import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BlogButton from ".";
import { ButtonVariant } from "../../index.type";
import classes from "./index.module.scss";

afterEach(cleanup);

const buttonVariant = Object.values(ButtonVariant);

const renderComponent = () => {
  const { baseElement } = render(
    <BlogButton
      id="blog-button"
      variant={undefined}
      text="Button"
      className={buttonVariant.join(" ")}
    />
  );
  return { baseElement };
};

describe("BlogButton Component", () => {
  it("should render successfully", () => {
    const { baseElement } = renderComponent();
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
  });

  it("should be button class according to variant by enum", () => {
    renderComponent();
    const button = screen.getByRole("button");

    buttonVariant.forEach((item) => {
      expect(button).toHaveClass(classes[item]);
    });
  });

  it("should be button text", () => {
    renderComponent();
    const button = screen.getByRole("button");

    expect(button).toHaveTextContent(/Button/i);
  });
});
