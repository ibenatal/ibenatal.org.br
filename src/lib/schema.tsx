import { memo } from 'react';
import type {
  BlogPosting,
  BreadcrumbList,
  Event,
  Thing,
  VideoObject,
  WithContext,
} from 'schema-dts';

// Helper function to create JSON-LD script element
export const JsonLd = memo(
  <T extends Thing>({
    data,
    testId,
  }: {
    data: WithContext<T>;
    testId: string;
  }) => {
    // Using key to ensure proper updates
    return (
      <script
        type="application/ld+json"
        suppressHydrationWarning
        data-testid={testId}
      >
        {JSON.stringify(data)}
      </script>
    );
  },
);

JsonLd.displayName = 'JsonLd';

// Event schema
export function EventSchema({
  name,
  description,
  startDate,
  location,
  image,
  url,
}: {
  name: string;
  description: string;
  startDate: string;
  location: string;
  image: string;
  url: string;
}) {
  const eventData: WithContext<Event> = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    location: {
      '@type': 'Place',
      name: location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: location,
      },
    },
    image,
    url,
  };

  return <JsonLd data={eventData} testId={`event-schema-${name}`} />;
}

// Blog post schema
export function BlogPostSchema({
  headline,
  description,
  datePublished,
  author,
  image,
  url,
}: {
  headline: string;
  description: string;
  datePublished: string;
  author: string;
  image: string;
  url: string;
}) {
  const blogData: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    image,
    url,
  };

  return <JsonLd data={blogData} testId={`blog-post-schema-${headline}`} />;
}

// Video schema
export function VideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  author,
}: {
  name: string;
  description?: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
  author: string;
}) {
  const videoData: WithContext<VideoObject> = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    contentUrl,
    author: {
      '@type': 'Person',
      name: author,
    },
  };

  return <JsonLd data={videoData} testId={`video-schema-${name}`} />;
}

// Breadcrumb schema
export function BreadcrumbSchema({
  items,
}: {
  items: {
    name: string;
    item: string;
  }[];
}) {
  const breadcrumbData: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Thing',
        '@id': item.item,
        name: item.name,
      },
    })),
  };

  return <JsonLd data={breadcrumbData} testId={`breadcrumb-schema`} />;
}

// Church organization schema
export function ChurchOrganizationSchema({
  name,
  description,
  image,
  url,
  address,
  foundingDate,
  parentOrganization,
}: {
  name: string;
  description: string;
  image: string;
  url: string;
  address: string;
  foundingDate?: string;
  parentOrganization?: string;
}) {
  const churchData: WithContext<any> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    description,
    image,
    url,
    address: {
      '@type': 'PostalAddress',
      addressLocality: address,
    },
    ...(foundingDate && { foundingDate }),
    ...(parentOrganization && {
      parentOrganization: {
        '@type': 'Organization',
        name: parentOrganization,
      },
    }),
  };

  return <JsonLd data={churchData} testId={`church-organization-schema-${name}`} />;
}

// Web page schema
export function WebPageSchema({
  name,
  description,
  image,
  url,
  author,
  datePublished,
  dateModified,
  breadcrumbs,
}: {
  name: string;
  description: string;
  image: string;
  url: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: {
    name: string;
    item: string;
  }[];
}) {
  const webPageData: WithContext<any> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    image,
    url,
    ...(author && {
      author: {
        '@type': 'Person',
        name: author,
      },
    }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(breadcrumbs && {
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Thing',
            '@id': item.item,
            name: item.name,
          },
        })),
      },
    }),
  };

  return <JsonLd data={webPageData} testId={`web-page-schema-${name}`} />;
}
