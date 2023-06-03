
import React from "react";
import { useState } from "react";
import { BookData } from "./BookData";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment ,Grid} from "@mui/material";
import Header from "./Header";
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
const UserHome=()=>{

    const [searchQuery, setSearchQuery] = useState("");

    const columns=[
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'title', headerName: 'TITTLE', width: 130 },
        { field: 'author', headerName: 'AUTHOR', width: 130 },
        { field: 'subject', headerName: 'SUBJECT', width: 130 },
        { field: 'publishDate', headerName: 'PUBLISHDATE', width: 130 },
    ];

    const getColumns = (cols) => {
        return cols.map((col) => ({
          ...col,
          headerClassName: 'custom-header',
          cellClassName: 'custom-cell',
        }));
      };

      const handleSearchChange=(event)=>{
               setSearchQuery(event.target.value);
      }

      const filteredRows = BookData.filter((row) => {
        const { title, author, subject, publishDate } = row;
        const lowerCaseQuery = searchQuery.toLowerCase();
        return (
          title.toLowerCase().includes(lowerCaseQuery) ||
          author.toLowerCase().includes(lowerCaseQuery) ||
          subject.toLowerCase().includes(lowerCaseQuery) ||
          publishDate.toLowerCase().includes(lowerCaseQuery)
        );
      });

      const filteredRowsCount = filteredRows.length;
    return(
        <div>
            <Header/>
            <Grid container spacing={2}>
     <Grid item xs={3}>
     <img src="https://tse1.mm.bing.net/th/id/OIP.05QiXWFRDJLw-qkUMJXmAQHaE6?pid=ImgDet&rs=1" alt="ParkingCartoon" style={{ width: '100%',paddingTop:'40px' }} /><br></br>
     <img src="https://tse4.mm.bing.net/th/id/OIP.mvDZn4tDZSZyo9EUaIXiIAHaLH?pid=ImgDet&rs=1" alt="ParkingCartoon" style={{ width: '100%',paddingTop:'40px' }} />


     </Grid>
     <Grid item xs={9}>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%',marginTop:'40px' }}>
        <div style={{ width: '67%'}}>
          
        <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <TextField
          label="Search by Title/Author/Subject/Published Date"
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          style={{ width: "100%"}}
        />
        {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
      </div>
        <br></br>
      <h4>Books Count : {filteredRowsCount}</h4>
      <br></br>
          <br></br>
        <DataGrid
          rows={filteredRows}
          columns={getColumns(columns)}
          autoHeight
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
      </div>
      </Grid>
      </Grid>
      </div>
    )
}

export default UserHome;