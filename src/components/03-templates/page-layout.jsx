import PageHeader from "../01-molecules/page-header";
import ContentLayout from "./content-layout";

const PageLayout = ({ title, menuHandler, activeMenuItems, children }) => {
  return (
    <div className="h-full w-full p-5">
      <PageHeader
        title={title}
        menuHandler={menuHandler}
        activeMenuItems={activeMenuItems}
      />
      <ContentLayout>{children}</ContentLayout>
    </div>
  );
};

export default PageLayout;
