import useAppContext from "../../context/appcontext/useappcontext";
import useHandlerContext from "../../context/handlercontext/usehandlercontext";
import JsonViewer from "../01-molecules/json-viewer";
import PageLayout from "../03-templates/page-layout";

const JsonViewerPage = () => {
  const context = useAppContext();
  const handlerContext = useHandlerContext();

  return (
    <PageLayout
      title={context.appState.title}
      menuHandler={handlerContext.menuHandler}
      activeMenuItems={context.appState.activeMenuItems}
    >
      <JsonViewer value={context.appState.scenarioData} />
    </PageLayout>
  );
};

export default JsonViewerPage;
