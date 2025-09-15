import type { MDXComponents } from 'mdx/types';
import { Children, isValidElement } from 'react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    p: (props) => {
      // Check if children is a div element
      const hasDivChild = Children.toArray(props.children).some(
        (child) => isValidElement(child) && child.type === 'div',
      );

      // If children contains a div, render only the children
      if (hasDivChild) {
        return <>{props.children}</>;
      }

      // Otherwise render the p wrapper with styling
      return (
        <p
          className="whitespace-pre-wrap px-2.5 font-body font-normal text-base text-primary-900 leading-relaxed sm:px-0 md:text-lg "
          {...props}
        />
      );
    },
    h1: (props) => (
      <h1
        className="pl-2.5 font-bold font-title text-5xl text-primary-900 leading-tight md:pl-0"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="pl-2.5 font-bold font-title text-4xl text-primary-900 leading-tight md:pl-0"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="pl-2.5 font-bold font-title text-3xl text-primary-900 leading-tight md:pl-0"
        {...props}
      />
    ),
    h4: (props) => (
      <h4
        className="pl-2.5 font-bold font-title text-2xl text-primary-900 leading-tight md:pl-0"
        {...props}
      />
    ),
    h5: (props) => (
      <h5
        className="pl-2.5 font-bold font-title text-primary-900 text-xl leading-tight md:pl-0"
        {...props}
      />
    ),
    h6: (props) => (
      <h6
        className="pl-2.5 font-bold font-title text-base text-primary-900 leading-tight md:pl-0"
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        className="ml-6 inline-flex list-outside list-disc flex-col gap-2.5 pr-2.5 sm:pr-0"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="ml-6 inline-flex list-outside list-decimal flex-col gap-2.5 pr-2.5 sm:pr-0"
        {...props}
      />
    ),
    li: (props) => (
      <li
        className="text-base leading-relaxed marker:mr-0 marker:text-theme-light sm:text-lg dark:marker:text-theme-dark"
        {...props}
      />
    ),
    code: (props) => (
      <code className="rounded-md px-1 py-px font-code " {...props} />
    ),
    hr: (props) => (
      <hr className="border-border-200 dark:border-white/10" {...props} />
    ),
    a: (props) => (
      <a
        className="text-link-light-normal text-primary underline hover:text-link-light--hover hover:no-underline active:text-link-light dark:text-link-dark-normal dark:active:text-link-dark-active dark:hover:text-link-dark--hover"
        {...props}
      />
    ),
    img: (props) => (
      // biome-ignore lint/a11y/useAltText: TODO: implement later
      // biome-ignore lint/performance/noImgElement: TODO: implement later
      <img
        className="h-auto w-full shadow sm:transform-none sm:rounded"
        {...props}
      />
    ),
    blockquote: (props) => {
      const { className, ...rest } = props as any;
      const mergedClassName = [
        'border-l-4 border-primary-500 pl-1 ml-2.5 md:ml-0 md:pl-4',
        className,
      ]
        .filter(Boolean)
        .join(' ');
      return <blockquote {...rest} className={mergedClassName} />;
    },
  };
}
