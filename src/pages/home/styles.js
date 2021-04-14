import styled from 'styled-components';

import { space } from '../../utils/mixins';
import { media } from '../../utils/media-queries';

const Fold = styled.div`
  align-items: flex-end;
  display: flex;
  padding: ${space(5.5)} 0 ${space(1.5)};
  position: relative;
  z-index: 1;

  ${media.min('tablet')`
    padding: ${space(4.5)} 0 ${space(3)};
  `};

  ${media.min('desktop')`
    min-height: 100vh;
  `};
`;

export { Fold };
