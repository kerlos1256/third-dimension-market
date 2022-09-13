import { RecommendedProductCard } from "@components";
import { Grid } from "@mui/material";
import {
  getRecommendedProducts,
  getRecommendedProductsQueryKey,
  useGetRecommendedProductsQuery,
} from "@services";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps, NextPage } from "next";
import React from "react";

interface RecommendedProductsProps {}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    getRecommendedProductsQueryKey(),
    getRecommendedProducts
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const RecommendedProducts: NextPage<RecommendedProductsProps> = () => {
  const { data: res, isLoading, isError } = useGetRecommendedProductsQuery();
  return (
    <Grid
      container
      justifyContent={"center"}
      gap={2}
      py={2}
      columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
    >
      {res
        ? res.data.map((product, i) => (
            <Grid item xs={1}>
              <RecommendedProductCard {...product} key={i} />
            </Grid>
          ))
        : null}
    </Grid>
  );
};

export default RecommendedProducts;
