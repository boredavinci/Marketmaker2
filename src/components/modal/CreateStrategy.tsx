import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure, FormControl, FormLabel, Input, Textarea, Select, Box } from '@chakra-ui/react';


export default function CreateStrategy() {

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
            </FormControl>

            <FormControl>
              <FormLabel>Token Pairs</FormLabel>
              <Box display="grid" gridGap={2} gridColumn={2} gridAutoFlow="row dense">
                <Select name='pair1' className='inline'>
                  <option>Token1</option>
                  <option>ETH</option>
                  <option>USDC</option>
                  <option>USDT</option>
                </Select>
                <Select name='pair2' className='inline'>
                  <option>Token2</option>
                  <option>ETH</option>
                  <option>USDC</option>
                  <option>USDT</option>
                </Select>
              </Box>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Strategy description</FormLabel>
              <Textarea placeholder='Strategy Description' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='brand' mr={3} rounded={'full'} size={'lg'} onClick={() => alert("Your strategy has been created")}>
              Create
            </Button>
            <Button onClick={onClose} rounded={'full'} size={'lg'}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
