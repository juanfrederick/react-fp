import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col min-h-screen text-slate-700 bg-sky-200 items-center justify-center gap-3">
        <h1 className="text-xl font-bold">404 | Not Found</h1>
        <Button
          data-testid="back"
          // className="text-sm px-3 py-2 bg-gray-600 text-sky-300 rounded-lg"
          colorScheme="cyan"
          onClick={() => {
            navigate(-1);
          }}
        >
          Take me back
        </Button>
      </div>
    </>
  );
};

export default NotFound;
