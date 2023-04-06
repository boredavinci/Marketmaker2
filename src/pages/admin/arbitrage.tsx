import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button
} from '@chakra-ui/react';


import LineChart from 'components/charts/LineChart';
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent } from 'variables/charts';
import * as contractJson from 'assets/contract-abi.json';


import AdminLayout from 'layouts/admin';
import { CONTRACT_ADDRESS } from 'types/constants';
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';

export default function Arbitrage() {
	const { address, isConnected } = useAccount()
  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: contractJson.abi,
    functionName: "start",
    chainId: 5,
    args: [],
  });
  const contractWrite = useContractWrite(config);

  const stopConfig = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: contractJson.abi,
    functionName: "stop",
    chainId: 5,
    args: [],
  }).config

  const contractWriteStop = useContractWrite(stopConfig) 
  
  const startStrategy = async() => {
    try {
      const data = await contractWrite.writeAsync?.();
      console.log(data)
    } catch(e) {
      console.log(e)
    }
  }

  const stopStrategy = async() => {
    try {
      const data = await contractWriteStop.writeAsync?.();
      console.log(data)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <AdminLayout>
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}
              bg={'gray.100'}>
              <LineChart chartData={lineChartDataTotalSpent} chartOptions={lineChartOptionsTotalSpent} />
            </Box>
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}>
                Eth-USDC
              </Text>
              <br />
              <Text as={'span'} color={'brand.400'}>
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              Gummies pastry carrot cake toffee cheesecake cheesecake. Cake jelly croissant marshmallow croissant cotton candy macaroon cupcake chocolate. Shortbread dessert chocolate bar shortbread caramels. Sweet roll topping sweet roll gummies cupcake gummi bears halvah sweet roll gummies. Macaroon tart sugar plum cookie sesame snaps caramels powder. Toffee caramels marzipan cake toffee danish caramels biscuit chocolate cake. Fruitcake muffin pie icing gingerbread icing. Powder ice cream fruitcake chocolate cake danish
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <Button
                rounded={'full'}
                size={'lg'}
                px={6}
                colorScheme={'brand'}
                disabled={!isConnected}
                onClick={async() => await startStrategy()}
              >
                Start Strategy
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                disabled={!isConnected}
                onClick={async() => await stopStrategy()}
                px={6}>
                Stop strategy
              </Button>
            </Stack>
          </Stack>

        </Stack>
      </Container>
    </AdminLayout>
  )
}
