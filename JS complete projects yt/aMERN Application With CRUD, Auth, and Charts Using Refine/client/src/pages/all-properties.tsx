import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from "react-router-dom";
import { CustomButton } from '../components';
import { Add } from '@mui/icons-material';
const AllProperties = () => {
    const navigate = useNavigate();

    return (
        <Box>
            <Stack direction="column" width="100%">
             <Typography fontSize={25} fontWeight={700} color="#11142d">
                {!AllProperties.length
                    ? "There are no properties"
                    : "All Properties"}
             </Typography>
             <CustomButton
                title="Add Property"
                handleClick={() => navigate("/properties/create")}
                backgroundColor="#475be8"
                color="#fcfcfc"
                icon={<Add />}
              />
            </Stack>
        </Box>

    )
}

export default AllProperties