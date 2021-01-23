import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import {
  Hero,
  Benefit,
  Layout,
  About,
  Testimoni,
  Kelas,
  ListBlog,
} from "../../components/molecules";

// Component
const Home = () => {
  const [dataBahasa, setDataBahasa] = useState([]);
  const [dataTataBahasa, setDataTataBahasa] = useState([]);

  const RefKelas = useRef(null);

  useEffect(() => {
    axios
      .get("http://admin.estudiacourse.id:1337/kelas-bahasa-spanyols")
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
      <Testimoni />
      <Kelas refKelas={RefKelas} />
      <ListBlog
        data={dataBahasa}
        title="Kelas Bahasa Spanyol"
        to="kelas-bahasa-spanyols"
        height="350px"
      />
      <ListBlog
        data={dataTataBahasa}
        title="Tata Bahasa dan Kosatakata"
        to="tata-bahasa-dan-kosakatas"
        height="350px"
      />
    </Layout>
  );
};

export default Home;
