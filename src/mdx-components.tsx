import type { ComponentProps } from 'react';
import { Children, isValidElement } from 'react';
import Image from 'next/image';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    p: (properties) => {
      // Check if children is a div element
      const hasDivChild = Children.toArray(properties.children).some(
        (child) => isValidElement(child) && child.type === 'div',
      );

      // If children contains a div, render only the children
      if (hasDivChild) {
        return <>{properties.children}</>;
      }

      // Otherwise render the p wrapper with styling
      return (
        <p
          className="whitespace-pre-wrap px-2.5 font-body font-normal text-base text-primary-900 leading-relaxed sm:px-0 md:text-lg "
          {...properties}
        />
      );
    },
    h1: (properties) => (
      <h1
        className="pl-2.5 font-bold font-title text-5xl text-primary-900 leading-tight md:pl-0"
        {...properties}
      />
    ),
    h2: (properties) => (
      <h2
        className="pl-2.5 font-bold font-title text-4xl text-primary-900 leading-tight md:pl-0"
        {...properties}
      />
    ),
    h3: (properties) => (
      <h3
        className="pl-2.5 font-bold font-title text-3xl text-primary-900 leading-tight md:pl-0"
        {...properties}
      />
    ),
    h4: (properties) => (
      <h4
        className="pl-2.5 font-bold font-title text-2xl text-primary-900 leading-tight md:pl-0"
        {...properties}
      />
    ),
    h5: (properties) => (
      <h5
        className="pl-2.5 font-bold font-title text-primary-900 text-xl leading-tight md:pl-0"
        {...properties}
      />
    ),
    h6: (properties) => (
      <h6
        className="pl-2.5 font-bold font-title text-base text-primary-900 leading-tight md:pl-0"
        {...properties}
      />
    ),
    ul: (properties) => (
      <ul
        className="ml-6 inline-flex list-outside list-disc flex-col gap-2.5 pr-2.5 sm:pr-0"
        {...properties}
      />
    ),
    ol: (properties) => (
      <ol
        className="ml-6 inline-flex list-outside list-decimal flex-col gap-2.5 pr-2.5 sm:pr-0"
        {...properties}
      />
    ),
    li: (properties) => (
      <li
        className="text-base leading-relaxed marker:mr-0 marker:text-theme-light sm:text-lg dark:marker:text-theme-dark"
        {...properties}
      />
    ),
    code: (properties) => <code className="rounded-md px-1 py-px font-code " {...properties} />,
    hr: (properties) => <hr className="border-border-200 dark:border-white/10" {...properties} />,
    a: (properties) => (
      <a
        className="text-link-light-normal text-primary underline hover:text-link-light--hover hover:no-underline active:text-link-light dark:text-link-dark-normal dark:active:text-link-dark-active dark:hover:text-link-dark--hover"
        {...properties}
      />
    ),
    img: (properties) => (
      <Image className="h-auto w-full shadow sm:transform-none sm:rounded" {...properties} />
    ),
    blockquote: (properties: ComponentProps<'blockquote'>) => {
      const { className, ...rest } = properties;
      const mergedClassName = [
        'border-l-4 border-primary-500 pl-1 ml-2.5 md:ml-0 md:pl-4 font-serif py-2.5',
        className,
      ]
        .filter(Boolean)
        .join(' ');
      return <blockquote {...rest} className={mergedClassName} />;
    },
  };
}
