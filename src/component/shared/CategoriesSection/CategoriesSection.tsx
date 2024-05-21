import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import category1 from "../../../assests/images/categories/Dishwasher Detergents.jpg";
import category2 from "../../../assests/images/categories/Dish Washing Soap.jpg";
import category3 from "../../../assests/images/categories/Dishwasher Rinse Aids.jpg";
import category4 from "../../../assests/images/categories/Dishwashing Gloves.jpg";
import category5 from "../../../assests/images/categories/Dishwashing Liquids.jpg";
import category6 from "../../../assests/images/categories/Dish Scrubbers and Sponges.jpg";
import Image from "next/image";

const categoriesCard = [
  { id: "1", title: "DishWasher Detergents", image: category1 },
  { id: "2", title: "Dish Washing Soap", image: category2 },
  { id: "3", title: "Dishwasher Rinse Aids", image: category3 },
  { id: "4", title: "Dish-washing Gloves", image: category4 },
  { id: "5", title: "Dish-washing Liquids.jpg", image: category5 },
  { id: "6", title: "Dish Scrubbers and Sponges", image: category6 },
];

const CategoriesSection = () => {
  return (
    <Box component="div" mt={{ xs: "100px", md: "120px" }}>
      <Container>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Box component="div" mb={{ xs: "40px", md: "50px" }}>
            <Typography
              variant="h3"
              component="h3"
              fontSize={{ xs: "28px", sm: "32px", md: "36px", xl: "44px" }}
              fontWeight={600}
              textAlign="center"
            >
              Top Categories
            </Typography>
            <Typography
              textAlign="center"
              mt={{ xs: "8px", md: "15px" }}
              fontSize={{ xs: "13px", sm: "14px", md: "15px" }}
            >
              {`DishCleaning Supplies Store, where we offer an extensive
          range of high-quality products to keep your kitchen spotless. Whether
          you're looking for eco-friendly options, heavy-duty scrubbers, or
          specialized cleaners, we have everything you need to make dishwashing
          a breeze.`}
            </Typography>
          </Box>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 12, md: 12 }}
          >
            {categoriesCard?.slice(0, 4)?.map((item, index) => (
              <Grid
                item
                xs={6}
                md={index === 0 ? 8 : index === 1 ? 4 : index === 2 ? 4 : 8}
                key={index}
              >
                <Card sx={{ position: "relative", padding: 0 }}>
                  <CardActionArea>
                    <CardMedia
                      sx={{
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
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button
            fullWidth={false}
            href="/flash-sale"
            sx={{
              padding: {
                xs: "5px 8px 4px 16px",
                md: "10px 20px 8px 40px ",
                lg: "14px 20px 10px 40px ",
              },
              fontSize: { xs: "13px", md: "15px" },
              borderRadius: "50px",
              color: "primary.light",
              width: { xs: "150px", md: "300px" },
              mt: { xs: "40px", md: "60px" },
            }}
          >
            View All
            <ArrowForwardIosIcon
              sx={{ marginLeft: "2px", fontSize: { xs: "18px", md: "18px" } }}
            ></ArrowForwardIosIcon>
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default CategoriesSection;
