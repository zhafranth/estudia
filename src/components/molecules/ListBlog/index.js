import React from "react";
import { WrapperBlog, Title } from "./style";
import { Link, useParams } from "react-router-dom";
import Card from "../CardBlog";

const Index = ({ data, to, title, height }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      <WrapperBlog height={height}>
        {data.lenght != 0 &&
          data.map((item, index) => (
            <Link to={`/${to}/${item.slug}`} className="link">
              <Card
                key={index}
                title={item.title}
                image={item.image[0].url}
                highlight={item.highlight}
              />
            </Link>
          ))}
      </WrapperBlog>
    </>
  );
};

export default Index;
