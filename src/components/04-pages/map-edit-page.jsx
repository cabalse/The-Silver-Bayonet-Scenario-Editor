import useAppContext from "../../context/appcontext/useappcontext";
import useHandlerContext from "../../context/handlercontext/usehandlercontext";
import MapEditor from "../02-organisms/map-editor";
import PageLayout from "../03-templates/page-layout";

const MapEditPage = () => {
  const context = useAppContext();
  const handlerContext = useHandlerContext();

  return (
    <PageLayout
      title={context.appState.title}
      menuHandler={handlerContext.menuHandler}
      disabledMenuItems={context.appState.disabledMenuItems}
    >
      <MapEditor data={context.appState.scenarioData.terrain} />
    </PageLayout>
  );
};

export default MapEditPage;
