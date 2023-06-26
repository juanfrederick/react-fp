// TODO: answer here
import { useState } from "react";
import Form from "../components/Form";
import NavBar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const AddStudent = () => {
  const [data, setData] = useState({
    fullname: "",
    profilePicture: "",
    address: "",
    birthDate: "",
    gender: "Male",
    phoneNumber: "",
    programStudy: "Ekonomi",
    faculty: "",
  });

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    switch (data.programStudy) {
      case "Ekonomi":
      case "Manajemen":
      case "Akuntansi":
        data.faculty = "Fakultas Ekonomi";
        break;
      case "Administrasi Publik":
      case "Administrasi Bisnis":
      case "Hubungan Internasional":
        data.faculty = "Fakultas Ilmu Sosial dan Politik";
        break;
      case "Teknik Sipil":
      case "Arsitektur":
        data.faculty = "Fakultas Teknik";
        break;
      default:
        data.faculty = "Fakultas Teknologi Informasi dan Sains";
        break;
    }

    await fetch("http://localhost:3001/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .catch((err) => console.log(err))
      .finally(() => {
        setData({
          fullname: "",
          profilePicture: "",
          address: "",
          birthDate: "",
          gender: "Male",
          phoneNumber: "",
          programStudy: "Ekonomi",
          faculty: "",
        });
        navigate("/student");
      });
  };

  return (
    <div className="bg-sky-200 min-h-screen">
      <NavBar />
      <h1 className="w-screen max-w-5xl m-auto font-bold text-3xl py-5 flex gap-5 ">
        Add Student
      </h1>
      <div className="w-screen max-w-5xl m-auto px-5 bg-sky-50 py-5 rounded-lg">
        <Form add={true} data={data} setData={setData} onsubmit={onSubmit} />
      </div>
      <Footer />
    </div>
  );
};

export default AddStudent;
