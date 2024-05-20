import { Box, Container, Stack, Typography } from "@mui/material";
import HeroCarousel from "./HeroCarousel/HeroCarousel";
import { Product } from "@/types";

const HeroSection = async () => {
  let filterCarouselItem = [];

  try {
    const res = await fetch(`${process.env.BACKEND_BASE_URL}/api/v1/products`, {
      cache: "force-cache",
    });
    const data = await res.json();

    if (Array.isArray(data.data)) {
      filterCarouselItem = data.data.filter(
        (d: Product) => d.isCarousel === true
      );
    }
  } catch (error) {
    console.log(error);
    throw new Error("Network response was not ok");
  }

  return (
    <Container>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        width={{ xs: "100%", sm: "80%", md: "60%", margin: "0 auto" }}
      >
        <Typography
          variant="h1"
          component="h2"
          fontSize={{ xs: "25px", sm: "35px", md: "45px", lg: "50px" }}
          fontWeight={600}
        >
          Your One-Stop Shop for All Dish{" "}
        </Typography>
        <Typography
          variant="h1"
          component="h2"
          fontSize={{ xs: "25px", sm: "35px", md: "45px", lg: "50px" }}
          fontWeight={600}
          color="primary.main"
        >
          Cleaning Needs
        </Typography>
        <Typography textAlign="center">
          {`Welcome to DishCleaning Supplies Store, where we offer an extensive
          range of high-quality products to keep your kitchen spotless. Whether
          you're looking for eco-friendly options, heavy-duty scrubbers, or
          specialized cleaners, we have everything you need to make dishwashing
          a breeze. Explore our collection and discover top brands, innovative
          solutions, and unbeatable prices. Clean dishes, happy kitchen!`}
        </Typography>
      </Stack>
      <HeroCarousel data={filterCarouselItem} />
    </Container>
  );
};

export default HeroSection;
