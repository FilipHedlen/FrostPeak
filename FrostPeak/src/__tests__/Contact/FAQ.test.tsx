import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactFAQ from "../../components/Contact/ContactFAQ/ContactFAQ";
import { FAQItem } from "../../components/Contact/ContactFAQ/ContactFAQ";

describe("ContactFAQ", () => {
    const faqData: FAQItem[] = [
      { question: "Q: What are the opening hours of the ski resort?", answer: "A: The ski resort is open from 8 AM to 5 PM, 7 days a week" },
      { question: "Q: How many slopes do you currently have on the resort?", answer: "A: Right now, we have 43 active slopes (kids slopes included)" },
    ];
  
    test("renders FAQ items correctly", () => {
      render(<ContactFAQ />);
      faqData.forEach(({ question }) => {
        const questionElement = screen.getByText(question);
        expect(questionElement).toBeInTheDocument();
      });
    });
  
    test("expands answer when question is clicked", async () => {
      render(<ContactFAQ />);
      faqData.forEach(({ question, answer }) => {
        const questionElement = screen.getByText(question);
        fireEvent.click(questionElement);
        const answerElement = screen.getByText(answer);
        expect(answerElement).toBeInTheDocument();
      });
    });
});