import useAppContext from "../../context/useappcontext";
import ScenarioEditor from "../organisms/scenario-editor";
import PageLayout from "../templates/page-layout";

const IndexPage = () => {
  const context = useAppContext();

  return (
    <PageLayout title={context.appState.title}>
      <ScenarioEditor />
    </PageLayout>
  );
};

export default IndexPage;
