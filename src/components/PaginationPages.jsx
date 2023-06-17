import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationPages = () => {
  return (
    <>
      <Stack spacing={2}>
        <Pagination
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          count={10}
          color="primary"
        />
      </Stack>
    </>
  );
};

export default PaginationPages;
