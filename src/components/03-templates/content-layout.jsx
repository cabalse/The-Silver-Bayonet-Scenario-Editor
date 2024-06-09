const ContentLayout = ({ children }) => {
  if (!children) return null;

  return (
    <div>
      <div className="w-full h-full mt-4 border-2 border-slate-200">
        {children}
      </div>
    </div>
  );
};

export default ContentLayout;
