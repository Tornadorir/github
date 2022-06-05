import React from "react";
import "./loading.css";
import ReactLoading from "react-loading";
import styled from "tachyons-components";

export const Section = styled('div')`
flex flex-wrap content-center justify-center white`;

  export const list = [
  {
    prop: "balls",
    name: "Balls"
  }
];

const Loading = () => (
    <Section>
      {list.map(l => (
          <ReactLoading type={l.prop} color="#f0262d" />
       ))}
    </Section>
  );
  
  export default Loading;