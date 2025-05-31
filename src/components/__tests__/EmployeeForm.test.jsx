import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import EmployeeForm from "../EmployeeForm";

describe("employee form", () => {
  const mockData = {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    jobTitle: "QA",
  };
  const mockErrors = {};
  const mockOnChange = vi.fn();
  const mockOnSubmit = vi.fn((e) => e.preventDefault());

  beforeEach(() => {
    render(
      <EmployeeForm
        formData={mockData}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
        formErrors={mockErrors}
      />
    );
  });

  it("renders coorect input values", () => {
    const firstNameInput = screen.getByRole("textbox", { name: /first name/i });
    const lastNameInput = screen.getByRole("textbox", { name: /last name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const jobTitleInput = screen.getByRole("textbox", { name: /job title/i });

    expect(firstNameInput).toHaveValue(mockData.firstName);
    expect(lastNameInput).toHaveValue(mockData.lastName);
    expect(emailInput).toHaveValue(mockData.email);
    expect(jobTitleInput).toHaveValue(mockData.jobTitle);
  });

  it('calls submit handler when "submit" button is clicked', () => {
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
});
