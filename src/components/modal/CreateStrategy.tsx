import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure, FormControl, FormLabel, Input, Textarea, SimpleGrid, Box, Select, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Stack, Switch } from '@chakra-ui/react';
import { useState } from 'react';


export default function CreateStrategy() {

  const [sliderValue, setSliderValue] = useState(50)

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  }



  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        mt={8}
        width={'240px'}
        color={'white'}
        rounded={'full'}
        size={'lg'}
        bg={'brand.500'}
        onClick={onOpen}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}>
        Create Strategy
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Strategy</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Strategy Name</FormLabel>
              <Input placeholder='Strategy Name' />

              <FormLabel mt={5} >Strategy description</FormLabel>
              <Textarea placeholder='Strategy Description' />


              <SimpleGrid columns={2} spacing={2} mt={5}>
                <Box>
                  <FormLabel>Token</FormLabel>
                  <Select placeholder='Select option'>
                    <option value='option1'>ETH</option>
                    <option value='option2'>BTC</option>
                    <option value='option3'>USDC</option>
                  </Select>
                </Box>
                <Box>
                  <FormLabel>Token</FormLabel>
                  <Select placeholder='Select option'>
                    <option value='option1'>ETH</option>
                    <option value='option2'>BTC</option>
                    <option value='option3'>USDC</option>
                  </Select>
                </Box>
              </SimpleGrid>
              <SimpleGrid columns={2} mt={5}>
                <Button colorScheme='brand' mr={3} rounded={'full'} size={'lg'} variant='outline'>
                  Buy
                </Button>
                <Button colorScheme='brand' mr={3} rounded={'full'} size={'lg'} variant='outline'>
                  Sell
                </Button>
              </SimpleGrid>


              <Box pt={6} pb={2}>
                <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
                  <SliderMark value={25} {...labelStyles}>
                    -.05%
                  </SliderMark>
                  <SliderMark value={50} {...labelStyles}>
                    0
                  </SliderMark>
                  <SliderMark value={75} {...labelStyles}>
                    +.05%
                  </SliderMark>

                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Box>

              <FormLabel>Price</FormLabel>
              <Input placeholder='Enter Price' />


            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='brand' mr={3} rounded={'full'} size={'lg'}>
              Create
            </Button>
            <Button onClick={onClose} rounded={'full'} size={'lg'}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal >
    </>
  )
}
