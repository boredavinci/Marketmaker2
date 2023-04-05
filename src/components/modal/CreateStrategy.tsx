import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';


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

            <FormControl mt={4}>
              <FormLabel>Strategy description</FormLabel>
              <Textarea placeholder='Strategy Description' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='brand' mr={3} rounded={'full'} size={'lg'}>
              Create
            </Button>
            <Button onClick={onClose} rounded={'full'} size={'lg'}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
