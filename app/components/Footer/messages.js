/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  copyright: {
    id: `${scope}.copyright.message`,
    defaultMessage: `spozywczak24.pl - {year}`
  },
  authorMessage: {
    id: `${scope}.author.message`,
    defaultMessage: `Odwiedź nas na {facebook}`,
  },
});
