function RightContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="hidden flex-col gap-5 border-l pl-5 md:ml-12 md:flex lg:ml-24 lg:pl-12 ">
      {children}
    </div>
  );
}
export default RightContent;
