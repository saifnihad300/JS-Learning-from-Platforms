import { Box, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from "react-router-dom";
import { CustomButton, PropertyCard } from '../components';
import { Add } from '@mui/icons-material';
import { useTable } from '@refinedev/core';
const AllProperties = () => {
    const navigate = useNavigate();
    
    const {
    tableQueryResult: {data, isLoading,  isError} ,
     current,
     setCurrent,
     setPageSize,
     pageCount,
     sorter, setSorters,
     filters, setFilters
    } = useTable();
    console.log(data)

    const allProperties = data?.data ?? [];

    if(isLoading) return <Typography>Loading...</Typography>
    if(isError) return <Typography>Error...</Typography>
    return (
        <Box>
            <Box mt='20px' sx = {{display: 'flex', flexWrap: 'wrap', gap: 3}}>
                <Stack direction="column" width="100%">
                <Typography fontSize={25} fontWeight={700} color="#11142d">
                  {!allProperties.length ? 'There are no properties' : 'All Properties'}
                </Typography>

                <Box mb={2} mt={3} display="flex" justifyContent="space-between" flexWrap="wrap" >
                    
                    <Box display="flex" gap={2} flexWrap="wrap" mb={{xs: '20px', sm: 0}}>
                        <CustomButton
                        title={`Sort Price`}
                        //handleClick={ () => {} }
                        backgroundColor='#476be8'
                        color='#fcfcfc'
                        />
                        <TextField
                         variant='outlined'
                         color='info'
                         placeholder='Search by Title'
                         value=''
                         //onChange={()=>{}}
                        />
                        <Select
                         variant='outlined'
                         color='info'
                         displayEmpty
                         required
                         inputProps={{'aria-label': 'Without label'}}
                         defaultValue=""
                         value=""
                         //onChange={()=>{}}
                        >
                        <MenuItem value="" > All</MenuItem>
                        </Select>
                    </Box>

                </Box>

                </Stack>
            </Box>
            <Stack direction="row" 
            justifyContent= "space-between"
            alignItems="center">
            
            
             <CustomButton
                title="Add Property"
                handleClick={() => navigate("/properties/create")}
                backgroundColor="#475be8"
                color="#fcfcfc"
                icon={<Add />}
              />
            </Stack>


           <Box mt="20px" sx={{display: 'flex', flexWrap: 'wrap', gap: 3}} >
            {
                allProperties.map((property)=>(
                    <PropertyCard
                     key={property._id}
                     id={property._id}
                     title={property.title}
                     price={property.price}
                     location={property.location}
                     photo={property.photo}
                    />
                ))
            }
            
         
           </Box>

           {allProperties.length>0 && (
             <Box
              display="flex"
              gap = {2}
              mt = {3}
              flexWrap="wrap"
             >

                <CustomButton
                 
                 title='Previous'
                 //handleClick={()=> setCurrent((prev)=prev-1)}
                 backgroundColor='#474be8'
                 color='#fcfcfc'
                 disabled={!(current>1)}
                />

                <Box display={{ xs: 'hidden', sm: 'flex'}}
                alignItems="center" gap='5px'>
                 Page{' '}<strong>{current} of {pageCount}</strong>
                </Box>

                <CustomButton
                 
                 title='Next'
                 //handleClick={()=> setCurrent((prev)=prev+1)}
                 backgroundColor='#474be8'
                 color='#fcfcfc'
                 disabled={current===pageCount}
                />

                <Select
                    variant='outlined'
                    color='info'
                    displayEmpty
                    required
                    inputProps={{'aria-label': 'Without label'}}
                    defaultValue="10"
                    
                    //onChange={()=>{}}
                >
                {[10, 20, 30, 40, 50].map((size) => (
                    <MenuItem key = {size} value={size} > show {size} </MenuItem>
                ))}
                
                </Select>

             </Box>
           )}

        </Box>



    )
}

export default AllProperties