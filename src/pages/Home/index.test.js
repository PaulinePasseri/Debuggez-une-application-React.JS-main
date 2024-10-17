import { fireEvent, render, screen } from "@testing-library/react";
import Page from './index'

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Page />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personnel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Page />);
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
  it("a list of events is displayed", () => {
    render(<Page />);
    const eventsTitle = screen.getByText("Nos réalisations");
    expect(eventsTitle).toBeInTheDocument();
  });

  it("a list of people is displayed", () => {
    render(<Page />);
    const peopleTitle = screen.getByText("Notre équipe");
    expect(peopleTitle).toBeInTheDocument();
  });

  it("a footer is displayed", () => {
    render(<Page />);
    const footerTitle = screen.getByText("Contactez-nous");
    expect(footerTitle).toBeInTheDocument();
  });

  it("an event card, with the last event, is displayed", async () => {
    render(<Page />);
    const lastEventTitle = await screen.findByText("Notre derniére prestation");
    expect(lastEventTitle).toBeInTheDocument();
  });

});
