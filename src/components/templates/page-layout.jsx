import PageHeader from "../molecules/page-header";
import ContentLayout from "./content-layout";

const PageLayout = ({ title, children }) => {
  return (
    <div className="h-full w-full p-5">
      <PageHeader title={title} />
      <ContentLayout>{children}</ContentLayout>
    </div>
  );
};

export default PageLayout;
