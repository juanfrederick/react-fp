// TODO: answer here
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from "../components/Form";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const EditStudent = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/student/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  const onSubmit = (e) => {
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

    fetch(`http://localhost:3001/student/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .catch((err) => console.log(err))
      .finally(() => navigate("/student"));
  };

  return (
    <div className="bg-sky-200 min-h-screen pb-6">
      <NavBar />
      {loading ? (
        <p className="w-screen max-w-5xl text-xl font-bold m-auto text-center">
          Loading ...
        </p>
      ) : (
        <div className="w-screen max-w-5xl m-auto px-5 bg-sky-50 py-5 flex gap-5 ">
          <img
            src={data.profilePicture}
            alt={data.fullname}
            className="w-44 h-44 object-cover object-center rounded-md"
          />
          <Form add={false} data={data} setData={setData} onsubmit={onSubmit} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default EditStudent;
