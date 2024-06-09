import PageTitle from "../00-atoms/page-title";
import PageMenu from "./page-menu";

const PageHeader = ({ title, menuHandler, disabledMenuItems }) => {
  return (
    <header className="w-full flex flex-col p-2 border-2 border-slate-200">
      <PageTitle title={title} />
      <PageMenu
        onSelectedMenuItem={menuHandler}
        disabledMenuItems={disabledMenuItems}
      />
    </header>
  );
};

export default PageHeader;
