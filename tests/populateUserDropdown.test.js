/**
 * @jest-environment jsdom
 */
import { populateUserDropdown } from '../modules/ui';

describe('populateUserDropdown', () => {
  it('should populate dropdown with default and user options', () => {
    const select = document.createElement('select');

    populateUserDropdown(['1', '2'], select);

    const options = [...select.options];

    expect(options.length).toBe(3);
    expect(options[0].textContent).toBe('--Select a user--');
    expect(options[1].textContent).toBe('User 1');
    expect(options[2].textContent).toBe('User 2');
  });
});
