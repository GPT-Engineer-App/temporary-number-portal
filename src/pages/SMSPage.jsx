import React from "react";
import { useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

const SMSPage = () => {
  const { phoneNumber } = useParams();

  return (
    <Box>
      <Text color="blue.500">SMS messages for phone number: {phoneNumber}</Text>
      {}
    </Box>
  );
};

export default SMSPage;
