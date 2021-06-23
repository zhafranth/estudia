import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout, ListBlog } from "../../components/molecules";
import HeroBlog from "../../components/molecules/HeroBlog";
import data from "../../Json/db.json";
const Blog = () => {
  const [listPost, setListPost] = useState([]);
  const [title, setTitle] = useState("");
  const { blogId } = useParams();

  const handleTitle = (blog) => {
    if (blog === "bahasa") {
      setListPost(data.bahasa);
      setTitle("Tata Bahasa dan Kosakata");
    } else if (blog === "kelas-bahasa-spanyol") {
      setTitle("Kelas Bahasa Spanyol");
    } else {
      setListPost(data.blog);
      setTitle("Artikel Estudia");
    }
  };
  useEffect(() => {
    handleTitle(blogId);
  }, [blogId]);
  return (
    <Layout primary>
      <HeroBlog title={title} />
      <ListBlog data={listPost} to={`${blogId}`} height="53vh" />
    </Layout>
  );
};

export default Blog;
