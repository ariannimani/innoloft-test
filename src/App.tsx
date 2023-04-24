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
    <div className="w-full min-h-full object-top	bg-gray-50 ">
      <Header data={data} />
      <div className=" flex place-content-center">
        <div className="flex justify-between gap-8 w-5/6	h-screen p-20">
          <Sidebar />
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
};

export default App;
