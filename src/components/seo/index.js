import React from 'react';
import Helmet from 'react-helmet';
import { Query } from "react-apollo";

import GET_SEO from './queries';

class SEO extends React.Component {
  render () {
    const { description, lang = 'en', meta, title } = this.props;

    return (
      <Query query={GET_SEO}>
        {({ data }) => {
          const webTitle = `${data.name} — ${data.job}`;
          const titleTemplate = title ? `%s | ${webTitle}` : `%s`;
          const metaDescription = description || data.description;
          const metaTitle = title || webTitle;
          const { siteUrl, ogImage } = data;

          return (
            <Helmet
              htmlAttributes={{
                lang,
              }}
              title={metaTitle}
              titleTemplate={titleTemplate}
              meta={meta}
            >
              <meta name="description" content={metaDescription} />

              <meta property="og:type" content="website" />
              <meta property="og:url" content={siteUrl} />
              <meta property="og:image" content={`${siteUrl}/${ogImage}`} />
              <meta property="og:title" content={metaTitle} />
              <meta property="og:description" content={metaDescription} />

              <meta name="twitter:card" content="summary" />
              <meta name="twitter:site" content={metaTitle} />
              <meta name="twitter:title" content={metaTitle} data-react-helmet="true" />
              <meta name="twitter:description" content={metaDescription} />
              <meta
                name="twitter:image"
                content={`${siteUrl}/${ogImage}`}
              />

              <link rel="apple-touch-icon-precomposed" sizes="57x57" href="favicon/apple-touch-icon-57x57.png" />
              <link rel="apple-touch-icon-precomposed" sizes="114x114" href="favicon/apple-touch-icon-114x114.png" />
              <link rel="apple-touch-icon-precomposed" sizes="72x72" href="favicon/apple-touch-icon-72x72.png" />
              <link rel="apple-touch-icon-precomposed" sizes="144x144" href="favicon/apple-touch-icon-144x144.png" />
              <link rel="apple-touch-icon-precomposed" sizes="60x60" href="favicon/apple-touch-icon-60x60.png" />
              <link rel="apple-touch-icon-precomposed" sizes="120x120" href="favicon/apple-touch-icon-120x120.png" />
              <link rel="apple-touch-icon-precomposed" sizes="76x76" href="favicon/apple-touch-icon-76x76.png" />
              <link rel="apple-touch-icon-precomposed" sizes="152x152" href="favicon/apple-touch-icon-152x152.png" />
              <link rel="icon" type="image/png" href="favicon/favicon-196x196.png" sizes="196x196" />
              <link rel="icon" type="image/png" href="favicon/favicon-96x96.png" sizes="96x96" />
              <link rel="icon" type="image/png" href="favicon/favicon-32x32.png" sizes="32x32" />
              <link rel="icon" type="image/png" href="favicon/favicon-16x16.png" sizes="16x16" />
              <link rel="icon" type="image/png" href="favicon/favicon-128.png" sizes="128x128" />

              <meta name="application-name" content="&nbsp;" />
              <meta name="msapplication-TileColor" content="#FFFFFF" />
              <meta name="msapplication-TileImage" content="favicon/mstile-144x144.png" />
              <meta name="msapplication-square70x70logo" content="favicon/mstile-70x70.png" />
              <meta name="msapplication-square150x150logo" content="favicon/mstile-150x150.png" />
              <meta name="msapplication-wide310x150logo" content="favicon/mstile-310x150.png" />
              <meta name="msapplication-square310x310logo" content="favicon/mstile-310x310.png" />
            </Helmet>
          );
        }}
      </Query>
    );
  }
}

export default SEO;
