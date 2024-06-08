import PageTitle from "../atoms/page-title";
import PageMenu from "./page-menu";

const PageHeader = ({ title }) => {
  return (
    <header className="">
      <PageTitle title={title} />´
      <PageMenu />
    </header>
  );
};

export default PageHeader;
