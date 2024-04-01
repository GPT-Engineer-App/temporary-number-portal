import { useState } from "react";
import { Box, Heading, Text, VStack, Select, List, ListItem, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa";

const countries = [
  { name: "Lithuania", code: "LT", phoneNumbers: ["+370 612 34567", "+370 645 78901", "+370 678 12345"] },
  { name: "United States", code: "US", phoneNumbers: ["+1 555 123 4567", "+1 555 890 1234", "+1 555 567 8901"] },
  { name: "United Kingdom", code: "GB", phoneNumbers: ["+44 7911 123456", "+44 7911 789012", "+44 7911 345678"] },
];

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <Box p={8} backgroundImage="url('https://images.unsplash.com/photo-1557200134-90327ee9fafa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbXMlMjB2ZXJpZmljYXRpb258ZW58MHx8fHwxNzExOTgyMjg1fDA&ixlib=rb-4.0.3&q=80&w=1080')" backgroundSize="cover" backgroundPosition="center">
      <VStack spacing={8} align="center">
        <Image src="https://images.unsplash.com/photo-1667453466805-75bbf36e8707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMHZlcmlmaWNhdGlvbnxlbnwwfHx8fDE3MTE5ODE5NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Phone Verification" boxSize="200px" />
        <Heading as="h1" size="xl">
          Temporary Phone Numbers
        </Heading>
        <Text fontSize="xl">Get verification codes using temporary phone numbers from different countries</Text>
        <Select placeholder="Select country" value={selectedCountry.code} onChange={(e) => setSelectedCountry(countries.find((c) => c.code === e.target.value))}>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </Select>
        <List spacing={3}>
          {selectedCountry.phoneNumbers.map((phoneNumber) => (
            <ListItem key={phoneNumber}>
              <Link as={RouterLink} to={`/sms/${phoneNumber}`}>
                <Text fontSize="lg">
                  <FaPhone /> {phoneNumber}
                </Text>
              </Link>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
};

export default Index;
