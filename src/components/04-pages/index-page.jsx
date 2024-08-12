import useAppContext from "../../context/appcontext/useappcontext";
import useHandlerContext from "../../context/handlercontext/usehandlercontext";
import PageLayout from "../03-templates/page-layout";

const IndexPage = () => {
  const context = useAppContext();
  const handlerContext = useHandlerContext();

  return (
    <PageLayout
      title={context.appState.title}
      menuHandler={handlerContext.menuHandler}
      activeMenuItems={context.appState.activeMenuItems}
    ></PageLayout>
  );
};

export default IndexPage;
