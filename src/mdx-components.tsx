import type { MDXComponents } from 'mdx/types';
import { Children, isValidElement } from 'react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  console.log(components);
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
          className="px-2.5 sm:px-0 whitespace-pre-wrap font-body font-normal text-base md:text-lg text-primary-900 leading-relaxed "
          {...props}
        />
      );
    },
    h1: (props) => (
      <h1
        className="font-bold font-title text-5xl text-primary-900 leading-tight"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="font-bold font-title text-4xl text-primary-900 leading-tight"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="font-bold font-title text-3xl text-primary-900 leading-tight"
        {...props}
      />
    ),
    h4: (props) => (
      <h4
        className="font-bold font-title text-2xl text-primary-900 leading-tight"
        {...props}
      />
    ),
    h5: (props) => (
      <h5
        className="font-bold font-title text-primary-900 text-xl leading-tight"
        {...props}
      />
    ),
    h6: (props) => (
      <h6
        className="font-bold font-title text-base text-primary-900 leading-tight"
        {...props}
      />
    ),
    ul: (props) => <ul className="ml-6 list-outside list-disc pr-2.5 sm:pr-0 inline-flex flex-col gap-2.5" {...props} />,
    ol: (props) => <ol className="ml-6 list-outside list-decimal pr-2.5 sm:pr-0 inline-flex flex-col gap-2.5" {...props} />,
    li: (props) => (
      <li
        className="leading-relaxed marker:mr-0 marker:text-theme-light dark:marker:text-theme-dark text-sm md:text-base"
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
      <img className="h-auto w-full sm:rounded shadow sm:transform-none" {...props} />
    ),
    blockquote: (props) => {
      const { className, ...rest } = props as any;
      const mergedClassName = [
        'border-l-4 border-primary-500 pl-4',
        className,
      ]
        .filter(Boolean)
        .join(' ');
      return <blockquote {...rest} className={mergedClassName} />;
    },
  };
}
