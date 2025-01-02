import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from "react-router-dom";
import { CustomButton, PropertyCard } from '../components';
import { Add } from '@mui/icons-material';
import { useTable } from '@refinedev/core';
const AllProperties = () => {
    const navigate = useNavigate();
    
    const {tableQueryResult: {data, isLoading,  isError} }= useTable();
    console.log(data)

    const allProperties = data?.data ?? [];

    if(isLoading) return <Typography>Loading...</Typography>
    if(isError) return <Typography>Error...</Typography>
    return (
        <Box>
            <Stack direction="row" 
            justifyContent= "space-between"
            alignItems="center">
            
            <Typography fontSize={25} fontWeight={700} color="#11142d">
              Properties
            </Typography>
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

        </Box>



    )
}

export default AllProperties