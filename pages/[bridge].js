import Head from 'next/head'
import _ from 'lodash'

import Bridge from '../components/bridge'
import meta from '../lib/meta'
import { getChains, getAssets } from '../lib/api/config'

export async function getStaticPaths() {
  const chains = getChains().map(c => c?.id)
  const assets = _.concat(getAssets().map(a => a?.id), '')

  return {
    paths:
      assets
        .flatMap(a =>
          chains
            .flatMap(c =>
              chains
                .filter(_c => _c !== c)
                .map(_c => `/${a ? `${a.toUpperCase()}-` : ''}from-${c}-to-${_c}`)
            )
        ),
    fallback: false,
  }
}

export async function getStaticProps(
  {
    params,
  },
) {
  const {
    bridge,
  } = { ...params }

  const asPath = `/${bridge}`

  return {
    props: {
      headMeta:
        meta(
          asPath,
          null,
          getChains(),
          getAssets(),
        ),
    },
  }
}

export default (
  {
    headMeta,
  },
) => {
  const {
    title,
    description,
    image,
    url,
  } = { ...headMeta }

  return (
    <>
      <Head>
        <title>
          {title}
        </title>
        <meta
          name="og:site_name"
          property="og:site_name"
          content={title}
        />
        <meta
          name="og:title"
          property="og:title"
          content={title}
        />
        <meta
          itemProp="name"
          content={title}
        />
        <meta
          itemProp="headline"
          content={title}
        />
        <meta
          itemProp="publisher"
          content={title}
        />
        <meta
          name="twitter:title"
          content={title}
        />

        <meta
          name="description"
          content={description}
        />
        <meta
          name="og:description"
          property="og:description"
          content={description}
        />
        <meta
          itemProp="description"
          content={description}
        />
        <meta
          name="twitter:description"
          content={description}
        />

        <meta
          name="og:image"
          property="og:image"
          content={image}
        />
        <meta
          itemProp="thumbnailUrl"
          content={image}
        />
        <meta
          itemProp="image"
          content={image}
        />
        <meta
          name="twitter:image"
          content={image}
        />
        <link
          rel="image_src"
          href={image}
        />

        <meta
          name="og:url"
          property="og:url"
          content={url}
        />
        <meta
          itemProp="url"
          content={url}
        />
        <meta
          name="twitter:url"
          content={url}
        />
        <link
          rel="canonical"
          href={url}
        />
      </Head>
      <Bridge />
    </>
  )
}