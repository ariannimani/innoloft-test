import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { Header, Sidebar } from "./components";
import { useFetch } from "hooks/useFetch";

export interface ConfigData {
  id: number;
  logo: string;
  mainColor: string;
  hasUserSection: boolean;
}
interface ConfigDataProps {
  isLoading: boolean;
  error: Error | null;
  data: ConfigData | null;
}

const App = () => {
  const { isLoading, error, data }: ConfigDataProps = useFetch(
    `${process.env.REACT_APP_DOMAIN}/configuration/${process.env.REACT_APP_ID}/`
  );

  if (isLoading) return <>Loading...</>;

  if (error) return <>Error</>;

  return (
    <div className="w-full min-h-full object-top">
      <Header data={data} />
      <div className="flex flex-col md:flex-row md:place-content-center">
        <Sidebar />
        <div className="w-full md:w-3/4 p-8">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
};

export default App;
