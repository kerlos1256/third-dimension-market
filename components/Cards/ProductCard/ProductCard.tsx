import { Card, CardContent, Stack, Typography } from "@mui/material";
import { RecommendedProductDataType } from "@services";
import React from "react";

export interface RecommendedProductCardProps
  extends RecommendedProductDataType {}

export const RecommendedProductCard: React.FC<RecommendedProductCardProps> = ({
  colors,
  description,
  id,
  name,
  price,
  sizes,
  thumbnail,
}) => {
  return (
    <Stack>
      <Card>
        <CardContent>
          <Typography>{name}</Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};
