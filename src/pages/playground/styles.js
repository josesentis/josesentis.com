import styled from 'styled-components';

import { media } from '../../utils/media-queries';

const ExerciceList = styled.div`
  ${media.min('phone')`
    display: flex;
    flex-wrap: wrap;
  `}
`;

export { ExerciceList };
