import styled from 'styled-components';

import { space } from '../../utils/mixins';

const Fold = styled.div`
  align-items: flex-end;
  display: flex;
  min-height: 100vh;
  padding: ${space(4.5)} 0 ${space(3)};
`;

export { Fold };
