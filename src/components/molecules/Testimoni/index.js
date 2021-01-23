import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import {
  MainTestimoni,
  Title,
  TestimoniWrapper,
  Item,
  ImgWrapper,
  MetaWrapper,
  Desc,
  Role,
} from "./style";

// Image
import Logo from "../../../assets/Logo/logo-title.png";
import ImgTestimoni from "../../../assets/Images/testimoni1.png";
import axios from "axios";

const Testimoni = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://admin.estudiacourse.id:1337/testimonis")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <MainTestimoni>
      <Title>
        Kenapa Harus <img src={Logo} alt="logo Estudia" />
      </Title>
      <TestimoniWrapper>
        <Carousel showArrows={false}>
          {data.length != 0 &&
            data.map((item) => (
              <Item key={item.id}>
                <ImgWrapper>
                  <img
                    src={`http://admin.estudiacourse.id:1337${item.image[0].url}`}
                    alt={`image-${item.id}`}
                    className="img-cover"
                  />
                </ImgWrapper>
                <MetaWrapper>
                  <Desc>“ {item.testi} ”</Desc>
                  <Role>{item.name}</Role>
                </MetaWrapper>
              </Item>
            ))}
        </Carousel>
      </TestimoniWrapper>
    </MainTestimoni>
  );
};

export default Testimoni;
