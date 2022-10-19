import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";

describe("Sidebar", () => {
  test("render Sidebar", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar"));
  });

  test("toggle Sidebar", () => {
    componentRender(<Sidebar />);
    const toggleButton = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar"));
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
  });
});
