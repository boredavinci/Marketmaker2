import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button
} from '@chakra-ui/react';
import LineChart from 'components/charts/LineChart';
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent } from 'variables/charts';
import { ethers } from 'ethers';
import { usePrepareContractWrite, useContractWrite, useNetwork, useAccount, useSigner } from 'wagmi';
// import * as strategyJson from "./../assets/Strategy.json"; // #TODO: add a Strategy.json
import { useState } from "react";

let provider: ethers.providers.Provider;
let strategyContract: ethers.Contract;
let tokenContract: ethers.Contract;

export default function MyCard({ apiKey, tokenRatio }: any) {

  provider = new ethers.providers.EtherscanProvider(
    'goerli',
    apiKey,
  )

  const strategyContractAddress = String(process.env.PUBLIC_CONTRACT_ADDRESS);

  strategyContract = new ethers.Contract(
    strategyContractAddress,
    strategyJson.abi, // #TODO import Strategy.json
    provider,
  );

  const { chain } = useNetwork();
  const { address, isConnected } = useAccount();

  const [requestLot, setRequestLot] = useState("");

  const { config } = usePrepareContractWrite({
    address: strategyContractAddress as any,
    abi: strategyJson.abi, // #TODO import Strategy.json
    functionName: "purchaseTokens",
    chainId: chain?.id,
    args: [
      {
        value: requestLot ? ethers.utils.parseEther(requestLot).div(tokenRatio) : 0,
      }
    ]
  })
  const contractWrite = useContractWrite(config);

  const purchaseTokens = async () => {
    try {
      console.log(config)
      console.log("Ready to transact?", contractWrite.write)
      const data = await contractWrite.writeAsync?.()
      console.log("Data", data)
    } catch (e) {
      console.log(e)
    }
  }

  const { data: signer } = useSigner();

  const deposit = async () => {
    if (signer) {
      try {
        const strategyWrite = strategyContract.connect(signer);
        const currentBlock = await provider.getBlock("latest");
        console.log("Current block: " + currentBlock);

        const tx = await strategyWrite.deposit();
      } catch (e) {
        console.log(e)
      }
    } else {
      alert("Connect your wallet first")
    }
  }

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




          {/* <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
          /> */}
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
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
            onClick={async () => await deposit()}>
            Invest Now
          </Button>


        </Stack>
      </Box>
    </Center>
  );
}