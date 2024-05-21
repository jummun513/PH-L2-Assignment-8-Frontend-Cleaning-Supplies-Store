import { Product } from "@/types";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import FlashSaleCard from "./FlashSaleCard/FlashSaleCard";

const FlashSaleSection = async () => {
  let filterFlashSaleItem = [];

  try {
    const res = await fetch(`${process.env.BACKEND_BASE_URL}/api/v1/products`, {
      next: {
        revalidate: 30,
      },
    });
    const data = await res.json();

    if (Array.isArray(data.data)) {
      filterFlashSaleItem = data.data.filter(
        (d: Product) => d.isFlashSale === true
      );
    }
  } catch (error) {
    console.log(error);
    throw new Error("Network response was not ok");
  }

  return (
    <Box component="div" mt={{ xs: "100px", md: "120px" }}>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={{ xs: "60px", md: "80px" }}
        >
          <Typography
            variant="h3"
            component="h3"
            fontSize={{ xs: "28px", sm: "32px", md: "36px", xl: "44px" }}
            fontWeight={600}
          >
            Flash Sale
          </Typography>
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
          {filterFlashSaleItem
            ?.slice(0, 4)
            ?.map((item: Product, index: number) => (
              <Grid item xs={1} sm={6} md={4} lg={3} key={index}>
                <FlashSaleCard item={item}></FlashSaleCard>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FlashSaleSection;
