function LeftContent({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-5 md:w-2/3">{children}</div>;
}
export default LeftContent;
