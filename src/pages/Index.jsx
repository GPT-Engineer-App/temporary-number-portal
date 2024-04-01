import { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Input, Button, useToast, Image } from "@chakra-ui/react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const toast = useToast();

  const handleGetCode = () => {
    // Čia būtų logika laikino telefono numerio priskyrimui ir verifikavimo kodo išsiuntimui
    const tempPhoneNumber = "+370 612 34567"; // Pavyzdinis laikinas telefono numeris
    const tempVerificationCode = "123456"; // Pavyzdinis verifikavimo kodas

    setPhoneNumber(tempPhoneNumber);
    setVerificationCode(tempVerificationCode);

    toast({
      title: "Verifikavimo kodas išsiųstas!",
      description: `Kodas išsiųstas į ${tempPhoneNumber}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <VStack spacing={8} align="center">
        <Image src="https://images.unsplash.com/photo-1667453466805-75bbf36e8707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMHZlcmlmaWNhdGlvbnxlbnwwfHx8fDE3MTE5ODE5NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Phone Verification" boxSize="200px" />
        <Heading as="h1" size="xl">
          Laikini telefono numeriai
        </Heading>
        <Text fontSize="xl">Gaukite verifikavimo kodus naudodami laikinus telefono numerius</Text>
        <HStack spacing={4}>
          <Input value={phoneNumber} isReadOnly placeholder="Laikinas telefono numeris" icon={<FaPhone />} />
          <Button colorScheme="blue" onClick={handleGetCode}>
            Gauti kodą
          </Button>
        </HStack>
        {verificationCode && (
          <HStack spacing={4}>
            <Input value={verificationCode} isReadOnly placeholder="Verifikavimo kodas" icon={<FaEnvelope />} />
            <Button
              colorScheme="green"
              onClick={() => {
                navigator.clipboard.writeText(verificationCode);
                toast({
                  title: "Kodas nukopijuotas!",
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                });
              }}
            >
              Kopijuoti
            </Button>
          </HStack>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
