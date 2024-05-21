"use client";

import { Product } from "@/types";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Countdown from "react-countdown";

const TrendingProductsCard = ({ item }: { item: Product }) => {
  return (
    <Card
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 345,
        margin: "0 auto",
        bgcolor: "#Fff",
        paddingBottom: "10px",
      }}
    >
      <Chip
        color="warning"
        sx={{ position: "absolute", top: "5px", left: "10px" }}
        label="5% off"
      />
      <CardMedia
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "40px",
        }}
      >
        <Image
          src={item.image.url}
          alt={item.title}
          width={200}
          height={200}
          loading="lazy"
          style={{ borderRadius: "10px" }}
        />
      </CardMedia>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="primary.main"
        >
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.category}
        </Typography>
        <Typography variant="body1" fontWeight={600} mt={1}>
          {item.price + " $"}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
};

export default TrendingProductsCard;