import { Product } from "@/types";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import TrendingProductsCard from "./TrendingProductsCard/TrendingProductsCard";

const TrendingProductsSection = async () => {
  let filterTendingProducts = [];

  try {
    const res = await fetch(`${process.env.BACKEND_BASE_URL}/api/v1/products`, {
      next: {
        revalidate: 30,
      },
    });
    const data = await res.json();

    if (Array.isArray(data.data)) {
      filterTendingProducts = data.data.filter(
        (d: Product) => d.isTrending === true
      );
    }
  } catch (error) {
    console.log(error);
    throw new Error("Network response was not ok");
  }

  return (
    <Box component="div" my={{ xs: "100px", md: "120px" }}>
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          mb={{ xs: "60px", md: "80px" }}
        >
          <Box
            component="div"
            sx={{ width: { sm: "60%" }, marginBottom: { xs: "15px", sm: 0 } }}
          >
            <Typography
              variant="h3"
              component="h3"
              fontSize={{ xs: "28px", sm: "32px", md: "36px", xl: "44px" }}
              fontWeight={600}
            >
              Top Trending Products
            </Typography>
            <Typography
              fontSize={{ xs: "13px", sm: "14px", md: "15px" }}
              sx={{ marginTop: { xs: "5px", mt: "10px" } }}
            >
              {
                "Whether you're looking for eco-friendly options, heavy-duty scrubbers, or specialized cleaners, we have everything you need to make dishwashing a breeze."
              }
            </Typography>
          </Box>
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
              width: { xs: "150px", md: "200px" },
            }}
          >
            View All
            <ArrowForwardIosIcon
              sx={{ marginLeft: "2px", fontSize: { xs: "18px", md: "18px" } }}
            ></ArrowForwardIosIcon>
          </Button>
        </Stack>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 12, md: 12, lg: 12 }}
        >
          {filterTendingProducts
            ?.slice(0, 8)
            ?.map((item: Product, index: number) => (
              <Grid item xs={1} sm={6} md={4} lg={3} key={index}>
                <TrendingProductsCard item={item}></TrendingProductsCard>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TrendingProductsSection;
