"use client";

import { Product } from "@/types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff3d47",
  },
});

const TrendingProductsCard = ({ item }: { item: Product }) => {
  const isSmallDevice = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
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
      {item.isTrending && (
        <Chip
          color="warning"
          sx={{ position: "absolute", top: "5px", left: "10px" }}
          label="5% off"
        />
      )}
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
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding="0 5px"
      >
        <StyledRating
          name="customized-color"
          value={item.rating}
          getLabelText={(value: number) =>
            `${value} Heart${value !== 1 ? "s" : ""}`
          }
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          readOnly
          size={isSmallDevice ? "small" : "medium"}
        />
        <Link href={`/dishwashing-items/${item._id}`}>
          <CardActions>
            <Button size="small">Details</Button>
          </CardActions>
        </Link>
      </Stack>
    </Card>
  );
};

export default TrendingProductsCard;
