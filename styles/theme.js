import 'styled-components';
import { css } from 'styled-components';

export const theme = {
  media: {
    sp: (...args) => css`
      @media (max-width: 768px) {
        ${css(...args)}
      }
    `,
  },
};