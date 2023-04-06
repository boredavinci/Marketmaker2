// chakra imports
import { Box, Button, Flex, Stack, Heading } from '@chakra-ui/react';
import CreateStrategy from 'components/modal/CreateStrategy';
//   Custom components
import Links from 'components/sidebar/components/Links';
import { IRoute } from 'types/navigation';


// FUNCTIONS

interface SidebarContentProps {
	routes: IRoute[];
}

function SidebarContent(props: SidebarContentProps) {
	const { routes } = props;
	// SIDEBAR
	return (
		<Flex direction='column' height='100%' pt='25px' borderRadius='30px'>

			<Heading ps='20px'>	GridMaker</Heading>
			<Stack direction='column' mt='8px' mb='auto'>
				<Box ps='20px' pe={{ lg: '16px', '2xl': '16px' }}>
					<Links routes={routes} />
				</Box>

				<Box
					ps='20px'
					mt='60px'>
					<CreateStrategy />
				</Box>
			</Stack>




		</Flex >
	);
}



export default SidebarContent;
