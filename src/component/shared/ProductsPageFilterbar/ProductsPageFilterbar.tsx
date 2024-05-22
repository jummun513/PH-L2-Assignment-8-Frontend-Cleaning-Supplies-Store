"use client";

import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const categoryRadioButton = [
  { id: "1", title: "Dishwasher Detergents", value: "Dishwasher Detergents" },
  { id: "2", title: "Dish Washing Soap", value: "Dish Washing Soap" },
  { id: "3", title: "Dishwasher Rinse Aids", value: "Dishwasher Rinse Aids" },
  { id: "4", title: "Dish Washing Gloves", value: "Dishwashing Gloves" },
  { id: "5", title: "Dish Washing Liquids", value: "Dishwashing Liquids" },
  {
    id: "6",
    title: "Dish Scrubbers and Sponges",
    value: "Dish Scrubbers and Sponges",
  },
];

const ratingRadioButton = [
  { id: "1", title: "1 Star Up", value: "1" },
  { id: "2", title: "2 Stars Up", value: "2" },
  { id: "3", title: "3 Stars Up", value: "3" },
  { id: "4", title: "4 Stars Up", value: "4" },
  { id: "5", title: "5 Stars Up", value: "5" },
];

const ProductsPageFilterbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const isSmallDevice = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    if (isSmallDevice) {
      if (event.target.checked) {
        router.push(pathname + "?" + createQueryString("category", value));
      } else {
        router.push(pathname);
      }
      setOpenFilterModal(false);
    } else {
      if (event.target.checked) {
        router.push(pathname + "?" + createQueryString("category", value));
      } else {
        router.push(pathname);
      }
    }
  };

  return (
    <Stack
      direction={{ xs: "row", lg: "column" }}
      justifyContent="flex-end"
      alignItems="center"
      sx={{ width: "100%", maxWidth: { xs: "100%", lg: "300px" } }}
    >
      <Typography
        component="h1"
        variant="h4"
        fontWeight={700}
        fontSize={{ xs: "18px", sm: "20px", lg: "24px" }}
        mb={{ lg: "25px" }}
        textAlign={{ lg: "center" }}
      >
        Filter By
      </Typography>
      {isSmallDevice ? (
        <IconButton
          aria-label="filter"
          sx={{ marginLeft: "10px" }}
          onClick={() => setOpenFilterModal(true)}
        >
          <FilterAltIcon />
        </IconButton>
      ) : (
        <Box
          component="form"
          sx={{ border: "2px solid gray", margin: "0 auto" }}
        >
          <FormControl>
            <Box
              component="div"
              sx={{
                borderBottom: "2px solid gray",
                padding: "20px 15px",
                width: "100%",
              }}
            >
              <FormLabel
                id="category-radio-buttons-group-label"
                sx={{
                  fontSize: { xs: "16px", sm: "18px", lg: "20px" },
                  fontWeight: 600,
                }}
              >
                Category
              </FormLabel>
              {categoryRadioButton?.map((item) => (
                <FormControlLabel
                  key={item.id}
                  value={item.value}
                  control={
                    <Checkbox
                      checked={searchParams.get("category") === item.value}
                      onChange={(e) => handleCheckBoxChange(e, item.value)}
                    />
                  }
                  label={item.title}
                />
              ))}
            </Box>

            <Box component="div" sx={{ padding: "20px 15px" }}>
              <FormLabel
                id="rating-radio-buttons-group-label"
                sx={{
                  fontSize: { xs: "16px", sm: "18px", lg: "20px" },
                  fontWeight: 600,
                }}
              >
                Rating
              </FormLabel>
              <RadioGroup
                aria-labelledby="rating-radio-buttons-group-label"
                name="rating-radio-buttons-group"
              >
                {ratingRadioButton?.map((item) => (
                  <FormControlLabel
                    key={item.id}
                    value={item.value}
                    control={
                      <Radio
                        checked={searchParams.get("rating") == item.value}
                        onChange={() =>
                          router.push(
                            pathname +
                              "?" +
                              createQueryString("rating", item.value)
                          )
                        }
                      />
                    }
                    label={item.title}
                  />
                ))}
              </RadioGroup>
            </Box>
          </FormControl>
        </Box>
      )}

      <Modal
        open={openFilterModal}
        onClose={() => setOpenFilterModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          sx={{
            border: "2px solid gray",
            width: { xs: "90%", sm: "60%", xl: "50rem" },
            margin: "0 auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: 24,
            bgcolor: "background.paper",
            padding: "30px 20px",
          }}
        >
          <FormControl sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="div"
              sx={{
                border: "2px solid gray",
                padding: "20px 15px",
                width: "100%",
              }}
            >
              <FormLabel
                component="h3"
                id="category-radio-buttons-group-label"
                sx={{
                  fontSize: { xs: "16px", sm: "18px", lg: "20px" },
                  fontWeight: 600,
                }}
              >
                Category
              </FormLabel>
              {categoryRadioButton?.map((item) => (
                <FormControlLabel
                  sx={{ display: "block" }}
                  key={item.id}
                  value={item.value}
                  control={
                    <Checkbox
                      checked={searchParams.get("category") === item.value}
                      onChange={(e) => handleCheckBoxChange(e, item.value)}
                    />
                  }
                  label={item.title}
                />
              ))}
            </Box>

            <Box
              component="div"
              sx={{
                border: "2px solid gray",
                borderTop: 0,
                padding: "20px 15px",
                width: "100%",
              }}
            >
              <FormLabel
                id="rating-radio-buttons-group-label"
                sx={{
                  fontSize: { xs: "16px", sm: "18px", lg: "20px" },
                  fontWeight: 600,
                }}
              >
                Rating
              </FormLabel>
              <RadioGroup
                aria-labelledby="rating-radio-buttons-group-label"
                name="rating-radio-buttons-group"
              >
                {ratingRadioButton?.map((item) => (
                  <FormControlLabel
                    key={item.id}
                    value={item.value}
                    control={
                      <Radio
                        checked={searchParams.get("rating") == item.value}
                        onChange={() => {
                          router.push(
                            pathname +
                              "?" +
                              createQueryString("rating", item.value)
                          );
                          setOpenFilterModal(false);
                        }}
                      />
                    }
                    label={item.title}
                  />
                ))}
              </RadioGroup>
            </Box>
          </FormControl>
        </Box>
      </Modal>
    </Stack>
  );
};

export default ProductsPageFilterbar;
