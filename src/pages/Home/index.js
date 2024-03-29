import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import data from "../../Json/db.json";
import {
  Hero,
  Benefit,
  Layout,
  About,
  Kelas,
  ListBlog,
  ProfilePengajar,
} from "../../components/molecules";

// Component
const Home = () => {
  const [dataBahasa, setDataBahasa] = useState([]);
  const [dataTataBahasa, setDataTataBahasa] = useState([]);

  const RefKelas = useRef(null);

  useEffect(() => {
    axios
      .get("http://admin.estudiacourse.id:1337/artikels")
      .then((res) => setDataBahasa(res.data))
      .catch((err) => console.log(err));

    axios
      .get("http://admin.estudiacourse.id:1337/tata-bahasa-dan-kosakatas")
      .then((res) => setDataTataBahasa(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Layout>
      <Hero refKelas={RefKelas} />
      <About />
      <Benefit />
      <ProfilePengajar />
      {/* <Testimoni /> */}
      {/* <Kelas refKelas={RefKelas} /> */}
      {/* <ListBlog
        data={dataBahasa}
        title="Kelas Bahasa Spanyol"
        to="kelas-bahasa-spanyols"
        height="350px"
      /> */}
      <ListBlog
        data={data.bahasa}
        title="Tata Bahasa dan Kosakata"
        to="bahasa"
        height="350px"
      />
      <ListBlog data={data.blogHome} title="Blog" to="blog" height="350px" />
    </Layout>
  );
};

export default Home;
