import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';
import { colors } from '../../utils/settings';

const ProjectDetail = styled.article`
  background-image: linear-gradient(90deg, ${colors.base500} 50%, ${colors.base100} 50%);
  margin-top: ${space(2)};

  > div { padding: 0; }

  .title2 {
    padding-left: ${space()};
    position: relative;

    .label {
      left: 0;
      position: absolute;
      bottom: 12px;
    }
  }

  .background-wrapper {
    background-color: ${colors.base100};
    color: ${colors.base500};
    margin: 0 calc(100% / 12);
    padding: ${space(2)} ${space()} ${space(2)};

    .reading { padding: 0; }
    a { color: ${colors.base500}; }
  }

  ${media.min('tablet')`
    .title2 {
      padding-left: ${space(1.5)};
    }
  `}

  ${media.min('desktop')`
    .title2 .label { bottom: 16px; }
  `}

  ${media.min('desktopLarge')`
    .title2 { margin-left: -${space(5)}; }
  `}
`;

export default ProjectDetail;
