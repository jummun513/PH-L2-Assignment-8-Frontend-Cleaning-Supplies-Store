import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import CategoriesSelectionCard from "./CategoriesSelectionCard/CategoriesSelectionCard";
import { categoriesCardData } from "@/utilities/categoriesCardData";

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
            {categoriesCardData?.map((item, index) => (
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
                <CategoriesSelectionCard item={item}></CategoriesSelectionCard>
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
