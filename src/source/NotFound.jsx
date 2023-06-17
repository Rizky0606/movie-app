import NavbarWeb from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavbarWeb />
      <ChevronLeftIcon
        boxSize={10}
        cursor="pointer"
        _hover={{
          background: "black",
          color: "white",
          border: "1px solid black",
          borderRadius: "50%",
        }}
        m="20px"
        onClick={() => navigate(-1)}
      />
      <h1 align="center">404</h1>
      <h3 align="center">Halaman Tidak Ditemukan</h3>

      <p align="center">Klik Logo Kembali untuk menuju halmaan sebelumnya</p>
    </>
  );
};

export default NotFound;
