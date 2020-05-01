/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'sp24.components.Header';

export default defineMessages({
  list: {
    id: `${scope}.list`,
    defaultMessage: 'Lista produktów',
  },
  howto: {
    id: `${scope}.howto`,
    defaultMessage: 'Jak zamawiać?',
  },
});
