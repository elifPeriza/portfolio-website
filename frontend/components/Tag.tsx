type TagProps = {
  children: string;
};

export default function Tag({ children }: TagProps) {
  return (
    <div className="inline-block bg-neon-light px-3 py-1 font-ibm text-sm">
      {children}
    </div>
  );
}
