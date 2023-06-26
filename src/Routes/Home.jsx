import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div
      className="h-screen bg-cover flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
      }}
    >
      <div className="flex gap-6">
        <div className="text-white">
          <h1 className="text-xl">Studi Independed</h1>
          <h1 className="text-xl">Kampus Merdeka</h1>
          <p className="font-bold">by RUANGGURU</p>
        </div>

        <div className="text-white flex flex-col border-l-2 pl-2">
          <h1 className="text-xl font-bold">Student Portal</h1>
          <Link to="/student">
            <Button
              colorScheme="blackAlpha"
              alignSelf="self-start"
              data-testid="student-btn"
            >
              ALL STUDENT
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
