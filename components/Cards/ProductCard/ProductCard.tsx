import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { RecommendedProductDataType } from "@services";
import { AspectRatio } from "@components";
import React from "react";
import { useRouting } from "@lib";

export interface RecommendedProductCardProps
  extends RecommendedProductDataType {}

export const RecommendedProductCard: React.FC<RecommendedProductCardProps> = (
  props
) => {
  const { name, price, sizes, thumbnail } = props;
  const { visit } = useRouting();

  return (
    <Card>
      <AspectRatio>
        <CardMedia component={"img"} image={thumbnail} alt={name} />
      </AspectRatio>
      <CardContent>
        <Stack direction={"column"} gap={"0.5rem"}>
          <Typography variant="h5">{name}</Typography>
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction={"row"} gap={"0.5rem"}>
              {sizes.map((size, i) => (
                <Typography key={i}>{size}</Typography>
              ))}
            </Stack>
            <Typography variant="h5">${price}</Typography>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          onClick={() =>
            visit((routes) => {
              return routes.visitProductDetails(props);
            })
          }
          color="info"
          variant="outlined"
        >
          Preview
        </Button>
      </CardActions>
    </Card>
  );
};
