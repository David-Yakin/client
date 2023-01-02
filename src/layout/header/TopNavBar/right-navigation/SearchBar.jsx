import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearchParams({ q: value });
  };

  return (
    <Box display="inline-flex">
      <FormControl variant="standard">
        <OutlinedInput
          sx={{ backgroundColor: "#e3f2fd" }}
          placeholder="Search"
          size="small"
          value={searchParams.get("q") ?? ""}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;
