import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout, ListBlog } from "../../components/molecules";
import HeroBlog from "../../components/molecules/HeroBlog";
import axios from "axios";

const Blog = () => {
  const [data, setData] = useState([]);
  const { blogId } = useParams();

  useEffect(() => {
    axios
      .get(`http://admin.estudiacourse.id:1337/${blogId}s`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [blogId]);
  const handleTitle = () => {
    if (blogId === "tata-bahasa-dan-kosakata") {
      return "Tata Bahasa dan Kosakata";
    } else if (blogId === "kelas-bahasa-spanyol") {
      return "Kelas Bahasa Spanyol";
    } else {
      return "Artikel Estudia";
    }
  };
  return (
    <Layout primary>
      <HeroBlog title={handleTitle()} />
      <ListBlog data={data} to={`${blogId}s`} height="53vh" />
    </Layout>
  );
};

export default Blog;
