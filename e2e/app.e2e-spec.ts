import { VideoPage } from './app.po';

describe('video App', function() {
  let page: VideoPage;

  beforeEach(() => {
    page = new VideoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
