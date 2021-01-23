import React, { useEffect, useState } from "react";
import {
  MainBenefit,
  Title,
  WrapperBenefit,
  ItemBenefit,
  Point,
  TitleBenefit,
  DescBenefit,
} from "./style";

// Logo
import Logo from "../../../assets/Logo/logo-title.png";
import axios from "axios";

const Benefit = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://admin.estudiacourse.id:1337/benefits")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <MainBenefit>
      <Title>
        Kenapa Harus <img src={Logo} alt="logo Estudia" />
      </Title>
      <WrapperBenefit>
        {data.length != 0 &&
          data.map((item, index) => (
            <ItemBenefit key={item.id}>
              <Point>0{index + 1}</Point>
              <TitleBenefit>{item.title}</TitleBenefit>
              <DescBenefit>{item.desc}</DescBenefit>
            </ItemBenefit>
          ))}
      </WrapperBenefit>
    </MainBenefit>
  );
};

export default Benefit;
