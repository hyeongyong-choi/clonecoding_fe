import React, { useState } from "react";
import InstaCard from "./InstaCard";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getInstaList } from "../redux/modules/InstaSlice";

const InstaList = () => {
  const { articles } = useSelector((state) => state.Insta);
  console.log("articles", articles);
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const ModalHandler = () => {
    setIsModal(!isModal);
  };

  useEffect(() => {
    dispatch(__getInstaList());
  }, []);

  return (
    <StDiv>
      {articles?.map((item) => (
        <InstaCard key={item.articlesId} item={item} />
      ))}
    </StDiv>
  );
};

export default InstaList;

const StDiv = styled.div`
  padding-top: 100px;
  background-color: #eee;
`;
