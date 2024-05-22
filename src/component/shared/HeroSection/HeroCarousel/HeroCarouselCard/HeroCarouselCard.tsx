import { Product } from "@/types";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const HeroCarouselCard = ({ item }: { item: Product }) => {
  return (
    <Card
      sx={{
        position: "relative",
        maxWidth: 345,
        margin: "0 auto",
        bgcolor: "#Fff",
        borderRadius: "20px",
      }}
    >
      <Chip
        color="error"
        label="10% off"
        sx={{ position: "absolute", top: "5px", left: "10px" }}
      />
      <Link href={`/dishwashing-items/${item._id}`}>
        <CardActionArea>
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
          <CardContent sx={{ paddingLeft: "30px" }}>
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
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default HeroCarouselCard;
