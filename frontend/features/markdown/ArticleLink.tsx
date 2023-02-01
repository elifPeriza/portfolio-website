export const ArticleLink = ({ href, children }: any) => {
  return (
    <a
      href={href}
      className="font-lato font-normal text-base text-violet-secondary underline decoration-violet-secondary mb-4 sm:text-lg sm:mb-6 "
    >
      {children}
    </a>
  );
};
