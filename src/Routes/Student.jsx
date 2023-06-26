import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const StudentHead = ({ setOption }) => {
  return (
    <div className="py-6 flex justify-between">
      <h1 className="font-bold text-xl">All Student</h1>
      <Select
        width="15rem"
        border="solid black 1px"
        bg="white"
        name="fakultas"
        id="fakultas"
        data-testid="filter"
        onChange={(e) => {
          setOption(e.target.value);
        }}
      >
        <option value="All">All</option>
        <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
        <option value="Fakultas Ilmu Sosial dan Politik">
          Fakultas Ilmu Sosial dan Politik
        </option>
        <option value="Fakultas Teknik">Fakultas Teknik</option>
        <option value="Fakultas Teknologi Informasi dan Sains">
          Fakultas Teknologi Informasi dan Sains
        </option>
      </Select>
    </div>
  );
};

const StudentData = ({ student, getData, option }) => {
  return (
    <TableContainer>
      <Table id="table-student" bg="rgb(240 249 255)" variant="simple">
        <Thead>
          <Tr>
            <Th>No</Th>
            <Th>Full Name</Th>
            <Th>Faculty</Th>
            <Th>Program Study</Th>
            <Th>Option</Th>
          </Tr>
        </Thead>
        <Tbody>
          {student
            ?.filter((val) => {
              if (option === "All") {
                return val;
              } else {
                return val.faculty === option;
              }
            })
            .map((val, index) => {
              const { id, fullname, faculty, programStudy } = val;
              return (
                <Tr className="student-data-row text-slate-700" key={id}>
                  <Td>{index + 1}</Td>

                  <Td>
                    <Link to={`${id}`}>{fullname}</Link>
                  </Td>

                  <Td>{faculty}</Td>
                  <Td>{programStudy}</Td>
                  <Td className="text-center">
                    <button
                      data-testid={`delete-${id}`}
                      className="bg-white px-2 py-[2px] text-red-500 rounded-md shadow-md transition-all hover:text-red-400"
                      onClick={(e) => {
                        const id = e.target
                          .getAttribute("data-testid")
                          .split("-")[1];
                        fetch(`http://localhost:3001/student/${id}`, {
                          method: "DELETE",
                        }).then(() => {
                          getData();
                        });
                      }}
                    >
                      Delete
                    </button>
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const Student = () => {
  const [student, setStudent] = useState([]);
  const [option, setOption] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:3001/student")
      .then((res) => res.json())
      .then((data) => setStudent(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-sky-200 min-h-screen pb-6">
      <NavBar />

      <div className="w-screen max-w-5xl m-auto mb-16">
        <StudentHead setOption={setOption} />
        {loading ? (
          <h1 className="font-bold text-xl text-center">Loading ...</h1>
        ) : (
          <StudentData student={student} getData={getData} option={option} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Student;
