import React from "react";
import { useHistory } from "react-router-dom";
import {
  WrapperBlog,
  CardProfile,
  ImgWrapper,
  Name,
  ListPengajar,
} from "./style.js";

// Assets
import Profile1 from "../../../assets/Images/profile1.png";
import Profile2 from "../../../assets/Images/profile2.png";

const ProfilePengajar = () => {
  const history = useHistory();
  return (
    <WrapperBlog>
      <h2>Profile Pengajar</h2>
      <ListPengajar>
        <CardProfile onClick={() => history.push("/profile-pengajar/anita")}>
          <ImgWrapper className="img-wrapper">
            <img alt="profile anita" src={Profile1} />
          </ImgWrapper>
          <Name className="name">
            <h5>Anita</h5>
          </Name>
        </CardProfile>
        <CardProfile onClick={() => history.push("/profile-pengajar/wida")}>
          <ImgWrapper className="img-wrapper">
            <img alt="profile anita" src={Profile2} />
          </ImgWrapper>
          <Name className="name">
            <h5>Wida</h5>
          </Name>
        </CardProfile>
      </ListPengajar>
    </WrapperBlog>
  );
};

export default ProfilePengajar;
