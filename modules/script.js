import { getUserIds, getData, setData } from './storage.js';
import {
  userSelect,
  bookmarkForm,
  urlInput,
  titleInput,
  descriptionInput,
} from './domElements.js';
import {
  populateUserDropdown,
  renderBookmarks
} from './ui.js';

let currentUser = '';

// load bookmarks
function loadBookmarksForUser(userId) {
  const bookmarks = getData(userId) || [];
  renderBookmarks(bookmarks);
}

function handleFormSubmit (e) {
  e.preventDefault()
  if (!currentUser) {
    alert("please select a user first");
    return;
  }

  const newBookmark = {
    url: urlInput.value,
    title: titleInput.value,
    description: descriptionInput.value,
    createdAt: new Date().toISOString(),
  };

  const existingDate = getData(currentUser) || [];
  const updatedData = [newBookmark, ...existingDate];

  setData(currentUser, updatedData);
  renderBookmarks(updatedData)

  bookmarkForm.reset();
  loadBookmarksForUser(currentUser);
}

document.addEventListener('DOMContentLoaded', () => {
  const userIds = getUserIds();
  populateUserDropdown(userIds);
  

  userSelect.addEventListener('change', () => {
    currentUser = userSelect.value;
    loadBookmarksForUser(currentUser);
  });

  bookmarkForm.addEventListener('submit', handleFormSubmit);
});



