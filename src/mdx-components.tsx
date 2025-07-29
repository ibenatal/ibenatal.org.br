import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    p: (props) => (
      <p
        className="font-body text-lg font-normal leading-relaxed whitespace-pre-wrap text-primary-900 "
        {...props}
      />
    ),
    h1: (props) => (
      <h1 className="font-title text-5xl text-primary-900  font-bold leading-tight" {...props} />
    ),
    h2: (props) => (
      <h2 className="font-title text-4xl text-primary-900  font-bold leading-tight" {...props} />
    ),
    h3: (props) => (
      <h3 className="font-title text-3xl text-primary-900  font-bold leading-tight" {...props} />
    ),
    h4: (props) => (
      <h4 className="font-title text-2xl text-primary-900  font-bold leading-tight" {...props} />
    ),
    h5: (props) => (
      <h5 className="font-title text-xl text-primary-900  font-bold leading-tight" {...props} />
    ),
    h6: (props) => (
      <h6 className="font-title text-base text-primary-900  font-bold leading-tight" {...props} />
    ),
    ul: (props) => <ul className="list-disc ml-6 list-outside" {...props} />,
    ol: (props) => <ol className="list-decimal list-outside ml-6" {...props} />,
    li: (props) => (
      <li
        className="mb-3 leading-relaxed marker:text-theme-light dark:marker:text-theme-dark marker:mr-0"
        {...props}
      />
    ),
    code: (props) => <code className="font-code px-1 py-px rounded-md " {...props} />,
    hr: (props) => <hr className="border-border-200 dark:border-white/10" {...props} />,
    a: (props) => (
      <a
        className="text-link-light-normal dark:text-link-dark-normal hover:text-link-light--hover dark:hover:text-link-dark--hover active:text-link-light -active dark:active:text-link-dark-active underline hover:no-underline"
        {...props}
      />
    ),
  };
}
