type ArticleLinkProps = {
  href?: string;
  children: React.ReactNode;
};

export const ArticleLink = ({ href, children }: ArticleLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mb-4 font-inter text-base font-medium text-violet-secondary no-underline decoration-violet-secondary sm:mb-6 sm:text-lg "
    >
      {children}
    </a>
  );
};
