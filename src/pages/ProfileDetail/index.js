import React from "react";
import { useParams } from "react-router-dom";
import { Content, ImgWrapper, Meta } from "./style.js";
import { Layout } from "../../components/molecules";
import data from "../../Json/db.json";
import parse from "html-react-parser";

// Images
import ImgProfileDetail1 from "../../assets/Images/profile-detail1.png";
import ImgProfileDetail2 from "../../assets/Images/profile-detail2.png";

const ProfileDetail = () => {
  const { profile } = useParams();
  const currentData = data.profile.find((item) => item.slug === profile);
  return (
    <Layout primary>
      <Content>
        <ImgWrapper>
          <img
            src={profile === "anita" ? ImgProfileDetail1 : ImgProfileDetail2}
            alt="profile image"
          />
        </ImgWrapper>
        <Meta>{parse(`${currentData.detail}`)}</Meta>
      </Content>
    </Layout>
  );
};

export default ProfileDetail;
