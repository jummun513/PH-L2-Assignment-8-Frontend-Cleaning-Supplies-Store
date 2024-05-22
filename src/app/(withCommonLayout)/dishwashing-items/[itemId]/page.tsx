import { ItemId, Product } from "@/types";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Rating,
  Typography,
} from "@mui/material";
import Image from "next/image";

// export const generateStaticParams = async () => {
//   try {
//     const res = await fetch(`${process.env.BACKEND_BASE_URL}/api/v1/products`);
//     if (!res.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const products = await res.json();
//     console.log(products);

//     if (!Array.isArray(products)) {
//       throw new Error("Expected an array of products.");
//     }

//     return products.slice(0, 3).map((product: Product) => ({
//       itemId: product._id,
//     }));
//   } catch (error) {
//     console.error("Failed to fetch products:", error);
//     return [];
//   }
// };

const DishWashingItemDetails = async ({ params }: ItemId) => {
  let singleData;
  try {
    const res = await fetch(
      `${process.env.BACKEND_BASE_URL}/api/v1/product/${params?.itemId}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    singleData = await res.json();
  } catch (error) {
    console.log(error);
    return (
      <Box component="div" my={{ xs: "60px", md: "80px" }}>
        <Container>
          <Typography variant="h6" color="error">
            Failed to load the product details.
          </Typography>
        </Container>
      </Box>
    );
  }

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
            Dish Washing Item
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
        <Card
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            padding: { xs: "40px 0", md: "60px 0" },
          }}
        >
          <CardMedia
            sx={{
              position: "relative",
              top: 0,
              left: 0,
              margin: "0 auto",
              width: { xs: "90%", md: "40%" },
              height: { xs: "300px", sm: "400px", md: "500px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={singleData?.data?.image?.url}
              alt={singleData?.data?.title}
              layout="fill"
              sizes="100%"
              loading="lazy"
              style={{ objectFit: "contain", top: 0, left: 0 }}
            />
          </CardMedia>
          <CardContent
            sx={{
              width: { xs: "90%", md: "60%" },
              marginTop: { xs: "25px", md: 0 },
              marginX: { xs: "auto" },
            }}
          >
            <Box
              component="div"
              borderBottom="2px solid #eee"
              paddingBottom={2}
            >
              <Typography
                component="div"
                variant="h5"
                fontSize={{ xs: "28px", md: "36px" }}
                fontWeight={600}
              >
                {singleData?.data?.title}
              </Typography>
              <Typography
                component="div"
                variant="h6"
                fontSize={{ xs: "20px", md: "24px" }}
                fontWeight={500}
              >
                {singleData?.data?.category}
              </Typography>
              <Box
                component="div"
                sx={{
                  display: { sm: "flex" },
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Typography
                  variant="body1"
                  color="text.secondary"
                  component="p"
                  fontSize={{ xs: "24px", md: "36px" }}
                >
                  {"$ " + singleData?.data?.price}
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    padding: { sm: "5px 10px 5px 20px" },
                    marginLeft: { sm: "20px" },
                    borderLeft: { sm: "4px solid gray" },
                  }}
                >
                  <Rating value={singleData?.data?.rating} readOnly></Rating>
                </Typography>
                {"(34 reviews)"}
              </Box>
            </Box>
            <Typography
              variant="body1"
              component="p"
              textAlign="justify"
              mt="20px"
              fontSize={{ xs: "13px", sm: "14px", lg: "16px" }}
            >
              {singleData?.data?.desc}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default DishWashingItemDetails;
