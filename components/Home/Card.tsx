import {
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { Faculty, Rate, Department, RateValue } from "@prisma/client";
import React from "react";

interface Props {
  faculty: Faculty & {
    Rate: {
      RateValue: RateValue[];
    }[];
    Department: {
      name: string;
    } | null;
  };
}

const Card = (Props: Props) => {
  const calculateRates = () => {
    let sum = 0;
    let count = 0;
    Props.faculty.Rate.map((rate) => {
      rate.RateValue.map((rateValue) => {
        sum += rateValue.value;
        count++;
      });
    });
    return sum / count;
  };

  console.log(Props);
  return (
    <VStack
      textColor="whiteBlue"
      w="100%"
      spacing={4}
      py={8}
      bg="lightBlue"
      rounded="lg"
      fontWeight="bold"
      shadow="lg"
    >
      <Flex w="100%" justifyContent="space-between" px={4}>
        <Text>{Props.faculty.name}</Text>
        <CircularProgress value={calculateRates() * 20} color="darkBlue">
          <CircularProgressLabel>{calculateRates()}</CircularProgressLabel>
        </CircularProgress>
      </Flex>
      <Flex w="100%" justifyContent="space-between" px={4}>
        <Text>{Props.faculty.Department?.name}</Text>
        <Text textColor="darkBlue">ذكر</Text>
      </Flex>
    </VStack>
  );
};

export default Card;
