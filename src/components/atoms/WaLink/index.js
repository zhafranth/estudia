import React from "react";
import { ButtonLink, WrapperLink } from "./style";

import { RiWhatsappFill } from "react-icons/ri";

const WaLink = () => {
  return (
    <WrapperLink>
      <div>
        <span>Info lebih lengkap, Chat Sekarang!</span>
      </div>
      <ButtonLink href="https://api.whatsapp.com/send?phone=6281290906836&text=Halo, Ada yang bisa kami bantu?">
        <RiWhatsappFill />
      </ButtonLink>
    </WrapperLink>
  );
};

export default WaLink;
