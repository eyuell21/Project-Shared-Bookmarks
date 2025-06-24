import { userSelect, bookmarkList, noBookmarksMsg } from './domElements.js';

export function populateUserDropdown(users) {

    // create defaultOption
    userSelect.innerHTML = '';

    const defaultOption = document.createElement('option')
    defaultOption.value = '';
    defaultOption.textContent = '--Select a user--';
    userSelect.appendChild(defaultOption)

    // create and append user option

    users.forEach(userId => {
        const option = document.createElement('option');
        option.value = userId;
        option.textContent = `User ${userId}`;
        userSelect.appendChild(option);
    });
}

export function renderBookmarks(bookmarks) {
    bookmarkList.innerHTML = '';

    if (!bookmarks || bookmarks.length === 0) {
        noBookmarksMsg.hidden = false;
        return;
    }

    noBookmarksMsg.hidden = true;
    // create and append li for links, description and time stamp

    
    bookmarks.forEach(b => {
        const li = document.createElement('li');

        // title(hyper link)
        const a = document.createElement('a');
        a.href = b.url;
        a.textContent = b.title;
        a.target = "_blank";
        a.rel = "noopener noreferrer"

        //description

        const desc = document.createElement('p');
        desc.textContent = b.description;

        // time stamp

        const ts = document.createElement('time')
        ts.dateTime = b.createdAt;
        ts.textContent = new Date(b.createdAt).toLocaleString();

        li.append(a, desc, ts);
        bookmarkList.appendChild(li);
    });

}
