import { Product } from "@/types";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const AllProductsPage = async () => {
  let data = [];
  try {
    const res = await fetch(`${process.env.BACKEND_BASE_URL}/api/v1/products`, {
      cache: "no-store",
    });
    data = await res.json();
  } catch (error) {
    console.log(error);
    throw new Error("Network response was not ok");
  }

  return (
    <Box
      component="div"
      sx={{
        padding: "40px 20px",
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        marginBottom={4}
        fontSize={{ xs: "24px", md: "30px" }}
        fontWeight={600}
      >
        All Products Data
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>SL NO.</TableCell>
              <TableCell align="center" sx={{ fontWeight: 600 }}>
                Product
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: 600 }}>
                Brand
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 600 }}>
                Price
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 600 }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data?.map((item: Product, index: number) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  {item.title}
                  <Image
                    src={item.image.url}
                    alt={item.title}
                    width={80}
                    height={80}
                    style={{ marginLeft: "8px" }}
                  ></Image>
                </TableCell>
                <TableCell align="left">{item.category}</TableCell>
                <TableCell align="right">{"$ " + item.price}</TableCell>
                <TableCell
                  align="right"
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  <IconButton sx={{ marginLeft: "8px" }}>
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                  <IconButton>
                    <EditIcon></EditIcon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllProductsPage;
