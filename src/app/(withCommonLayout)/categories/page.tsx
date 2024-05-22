import CategoriesSelectionCard from "@/component/shared/CategoriesSection/CategoriesSelectionCard/CategoriesSelectionCard";
import { CategoryItem } from "@/types";
import { categoriesCardData } from "@/utilities/categoriesCardData";
import { Box, Container, Grid, Typography } from "@mui/material";

const CategoriesPage = () => {
  return (
    <Box component="div" my={{ xs: "60px", md: "80px" }}>
      <Container>
        <Box component="div" mb={{ xs: "40px", md: "50px" }}>
          <Typography
            variant="h3"
            component="h3"
            fontSize={{ xs: "28px", sm: "32px", md: "36px", xl: "44px" }}
            fontWeight={600}
            textAlign="center"
          >
            All Categories
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
          columns={{ xs: 1, sm: 12, md: 12, lg: 12 }}
        >
          {categoriesCardData?.map((item: CategoryItem, index: number) => (
            <Grid item xs={1} sm={6} md={4} lg={3} key={index}>
              <CategoriesSelectionCard item={item}></CategoriesSelectionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoriesPage;
