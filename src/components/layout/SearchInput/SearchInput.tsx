/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, IconButton, OutlinedInput } from "@mui/material";
import { useStyles } from "./SearchInput.styles";

interface SearchInputProps {
  handleSearch: (params: number | string) => void;
  customStyles?: any;
}
const SearchInput = ({ handleSearch, customStyles }: SearchInputProps) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState<number | string>("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch(searchTerm);
    }
  };
  return (
    <>
      <OutlinedInput
        className={classes.searchInputRoot}
        sx={customStyles}
        id="outlined-adornment-amount"
        placeholder="Tìm kiếm"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  );
};

export default SearchInput;
