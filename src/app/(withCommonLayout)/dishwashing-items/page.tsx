import ProductsPageFilterbar from "@/component/shared/ProductsPageFilterbar/ProductsPageFilterbar";
import TrendingProductsCard from "@/component/shared/TrendingProductsSection/TrendingProductsCard/TrendingProductsCard";
import { Product } from "@/types";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  let url = `${process.env.BACKEND_BASE_URL}/api/v1/products`;
  if (searchParams.category) {
    url = `${process.env.BACKEND_BASE_URL}/api/v1/products?category=${searchParams.category}`;
  }
  if (searchParams.rating) {
    url = `${process.env.BACKEND_BASE_URL}/api/v1/products?rating=${searchParams.rating}`;
  }
  if (searchParams.category && searchParams.rating) {
    url = `${process.env.BACKEND_BASE_URL}/api/v1/products?category=${searchParams.category}&rating=${searchParams.rating}`;
  }
  let data = [];
  try {
    const res = await fetch(url, {
      cache: "no-store",
    });
    data = await res.json();
  } catch (error) {
    console.log(error);
    throw new Error("Network response was not ok");
  }

  return (
    <Box component="div" my={{ xs: "60px", md: "80px" }}>
      <Container>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          justifyContent="center"
          alignItems="start"
          spacing={5}
        >
          <ProductsPageFilterbar></ProductsPageFilterbar>
          <Stack direction="column">
            <Box component="div" mb={{ xs: "40px", md: "50px" }}>
              <Typography
                variant="h3"
                component="h3"
                fontSize={{ xs: "28px", sm: "32px", md: "36px", xl: "44px" }}
                fontWeight={600}
                textAlign="center"
              >
                All Dishwahing Items
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
            <Typography component="h2" variant="body1" mb="20px">
              Showing {data?.data?.length} of {data?.data?.length}
            </Typography>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 1, md: 12, xl: 12 }}
            >
              {data?.data?.map((item: Product, index: number) => (
                <Grid item xs={1} md={6} xl={4} key={index}>
                  <TrendingProductsCard item={item}></TrendingProductsCard>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProductsPage;
