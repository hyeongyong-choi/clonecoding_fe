import React from "react";
import InstaCard from "./InstaCard";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getInstaList } from "../redux/modules/InstaSlice";

const InstaList = () => {
  const { articles } = useSelector((state) => state.Insta);
  const dispatch = useDispatch();
  console.log("articles", articles);

  useEffect(() => {
    dispatch(__getInstaList());
  }, []);

  return (
    <StDiv>
      {articles &&
        articles.map((item) => <InstaCard key={item.id} item={item} />)}
    </StDiv>
  );
};

export default InstaList;

const StDiv = styled.div`
  padding-top: 100px;
  background-color: #eee;
`;
