import { Box, Container, Grid, Stack, Typography } from "@mui/material";
const ProductsPage = ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  console.log(searchParams);
  return (
    <Box component="div" my={{ xs: "60px", md: "80px" }}>
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
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 12, md: 12 }}
          >
            {/* {categoriesCard?.map((item, index) => (
          <Grid
            item
            xs={6}
            md={
              index === 0
                ? 3
                : index === 1
                ? 6
                : index === 2
                ? 3
                : index === 3
                ? 4
                : index === 4
                ? 4
                : 4
            }
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
        ))} */}
          </Grid>
        </Stack>
        <Stack></Stack>
      </Container>
    </Box>
  );
};

export default ProductsPage;
