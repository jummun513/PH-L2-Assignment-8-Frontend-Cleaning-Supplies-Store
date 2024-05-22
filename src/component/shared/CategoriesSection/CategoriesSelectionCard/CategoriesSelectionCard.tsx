import { CategoryItem } from "@/types";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const CategoriesSelectionCard = ({ item }: { item: CategoryItem }) => {
  return (
    <Card sx={{ position: "relative", padding: 0 }}>
      <Link href={`/dishwashing-items?category=${item.title}`}>
        <CardActionArea>
          <CardMedia
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              padding: 0,
              height: { xs: 50, sm: 100, md: 150, xl: 180 },
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="100%"
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
          </CardMedia>
          <Box
            component="div"
            sx={{
              position: "absolute",
              height: "100%",
              width: "100%",
              bgcolor: "black",
              top: 0,
              left: 0,
              opacity: 0.6,
            }}
          ></Box>
          <CardContent sx={{ position: "relative", bottom: "25px" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="p"
              textAlign="center"
              fontWeight={600}
              color="primary.light"
              fontSize={{ xs: "14px", md: "18px", xl: "20px" }}
            >
              {item.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default CategoriesSelectionCard;
