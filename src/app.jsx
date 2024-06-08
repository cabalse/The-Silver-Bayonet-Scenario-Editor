import IndexPage from "./components/pages/index-page";
import AppContextprovider from "./context/appcontextprovider";

function App() {
  return (
    <AppContextprovider>
      <IndexPage />
    </AppContextprovider>
  );
}

export default App;
