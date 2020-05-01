/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'sp24.containers.HomePage';

export default defineMessages({
  startHeader: {
    id: `${scope}.start.header`,
    defaultMessage: `Spozywczak 24`,
  },
  startMessage: {
    id: `${scope}.start.message`,
    defaultMessage: `Ten sklep jest otwarty 24h/7 dni w tygodniu!`,
  },
  findmeHeader: {
    id: `${scope}.findme.header`,
    defaultMessage: `Znajdź mnie!`,
  },
  findmeMessage: {
    id: `${scope}.findme.message`,
    defaultMessage: `Mamy w ofercie setki produktów.`,
  },
});
