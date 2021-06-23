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
        <ItemBenefit>
          <Point>1</Point>
          <TitleBenefit>Praktis dan Flexibel</TitleBenefit>
          <DescBenefit>
            Dengan belajar melalui platform Zoom, kamu bisa belajar dari mana
            aja.
          </DescBenefit>
        </ItemBenefit>
        <ItemBenefit>
          <Point>2</Point>
          <TitleBenefit>Murah dan Hemat</TitleBenefit>
          <DescBenefit>
            Harga miring dengan kualitas yang bisa dibandingkan dengan kursus
            bahasa Spanyol lainnya.
          </DescBenefit>
        </ItemBenefit>
        <ItemBenefit>
          <Point>3</Point>
          <TitleBenefit>Mentor Terbaik</TitleBenefit>
          <DescBenefit>
            Mentor Estudia sudah berpengalaman lebih dari 5 tahun dengan murid
            dari Indonesia maupun negara lain.
          </DescBenefit>
        </ItemBenefit>
      </WrapperBenefit>
    </MainBenefit>
  );
};

export default Benefit;
