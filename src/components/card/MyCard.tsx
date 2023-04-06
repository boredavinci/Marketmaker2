import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Button
} from '@chakra-ui/react';
import LineChart from 'components/charts/LineChart';
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent } from 'variables/charts';

import * as contractJson from 'assets/contract-abi.json';

import { useAccount, usePrepareContractWrite, useContractWrite } from 'wagmi';


export default function MyCard() {

  // const { isConnected } = useAccount();

  const { config } = usePrepareContractWrite({
    address: '0x45992EAaB1D6347bB89df28c43d1077bA4EdfB0e',
    abi: contractJson.abi,
    functionName: 'purchaseTokens',
  });


  const { write: purchaseTokens } = useContractWrite(config);


  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            filter: 'blur(15px)',
            zIndex: -1,
            bg: 'gray.100',
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Box minH='260px' minW='75%' mt='auto'>
            <LineChart chartData={lineChartDataTotalSpent} chartOptions={lineChartOptionsTotalSpent} />
          </Box>
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Created by: Brandon Frasier
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Arbitrage Strategy
          </Heading>

          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#422AFB', 'gray.900')}
            color={'white'}
            rounded={'full'}
            size={'lg'}
            onClick={() => purchaseTokens?.()}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Invest Now
          </Button>

        </Stack>
      </Box>
    </Center>
  );
}