import useAppContext from "../../context/useappcontext";
import PageLayout from "../templates/page-layout";

const IndexPage = () => {
  const context = useAppContext();

  return <PageLayout title={context.appState.app.title}></PageLayout>;
};

export default IndexPage;
