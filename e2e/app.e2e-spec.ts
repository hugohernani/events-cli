import { EventsClientPage } from './app.po';

describe('events-client App', () => {
  let page: EventsClientPage;

  beforeEach(() => {
    page = new EventsClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
