import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar";
import { renderWithTranslation } from "shared/lib/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
  test("render Sidebar", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar"));
  });

  test("toggle Sidebar", () => {
    renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar"));
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
  });
});
