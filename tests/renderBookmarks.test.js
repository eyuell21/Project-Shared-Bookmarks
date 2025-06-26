/**
 * @jest-environment jsdom
 */

import { renderBookmarks } from '../modules/ui';

describe('renderBookmarks', () => {
  let bookmarkList, noBookmarksMsg;

  beforeEach(() => {
    document.body.innerHTML = `
      <ul id="bookmarkList"></ul>
      <div id="noBookmarksMsg" hidden></div>
    `;
    bookmarkList = document.getElementById('bookmarkList');
    noBookmarksMsg = document.getElementById('noBookmarksMsg');
  });

  it('shows "no bookmarks" message when list is empty', () => {
    renderBookmarks([], bookmarkList, noBookmarksMsg);

    expect(noBookmarksMsg.hidden).toBe(false);
    expect(bookmarkList.children.length).toBe(0);
  });

  it('renders bookmarks when data is provided', () => {
    const bookmarks = [
      {
        title: 'Example',
        url: 'https://example.com',
        description: 'An example site',
        createdAt: new Date().toISOString()
      }
    ];

    renderBookmarks(bookmarks, bookmarkList, noBookmarksMsg);

    expect(noBookmarksMsg.hidden).toBe(true);
    expect(bookmarkList.children.length).toBe(1);
    const li = bookmarkList.children[0];

    expect(li.querySelector('p').textContent).toBe(bookmarks[0].description);
  });
});
