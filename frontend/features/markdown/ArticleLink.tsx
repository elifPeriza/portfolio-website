export const ArticleLink = ({ href, children }: any) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-lato font-medium text-base text-violet-secondary no-underline decoration-violet-secondary mb-4 sm:text-lg sm:mb-6 "
    >
      {children}
    </a>
  );
};
