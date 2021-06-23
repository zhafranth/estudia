import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImgWrapper, Desc, Title } from "./style";
import { Layout } from "../../components/molecules";
import parse from "html-react-parser";
import data from "../../Json/db.json";

const DetailBlog = (props) => {
  const { detailArtikel, artikel } = useParams();
  const [dataDetail, setDataDetail] = useState({});
  useEffect(() => {
    const tempData = data[artikel]?.filter(
      (item) => item.slug === detailArtikel
    );
    setDataDetail(tempData[0]);
  }, []);
  return (
    <Layout primary>
      <ImgWrapper>
        <img src={dataDetail?.image} alt="cover blog" className="img-cover" />
      </ImgWrapper>

      <Title>{dataDetail?.title}</Title>
      <Desc>{parse(`${dataDetail?.desc}`)}</Desc>
    </Layout>
  );
};

export default DetailBlog;
