import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Национальный центр развития высшего образования',
  images: [
    {
      url: `${getServerSideURL()}/enic.png`,
    },
  ],
  siteName: 'ENIC Kazakhstan',
  title: 'ENIC Kazakhstan',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
