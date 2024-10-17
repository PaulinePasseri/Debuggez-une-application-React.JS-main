import { fireEvent, render, screen } from "@testing-library/react";
import Home from './index'

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personnel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(<Home/>)
    const events = await screen.findAllByTestId("event-card")
    expect(events.length).toBeGreaterThan(0)
  })
  it("a list of people is displayed", async () => {
    render(<Home/>)
    const people = await screen.findAllByTestId("person-card")
    expect(people.length).toBeGreaterThan(0)
  })
  it("a footer is displayed", () => {
    render(<Home/>)
    const footer = screen.getByRole("contentinfo")
    expect(footer).toBeInTheDocument();
  })
  it("an event card, with the last event, is displayed", async () => {
    render(<Home/>)
    const lastEvent = await screen.findByTestId("last-event-card")
    expect(lastEvent).toBeInTheDocument()
  })
})
