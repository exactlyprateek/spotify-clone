import { Image } from '@chakra-ui/image';
import { Box, Heading, HStack} from '@chakra-ui/layout';
import { Tooltip } from '@chakra-ui/tooltip';
interface Props {
	id: string;
	title: string;
	cover: string;
}
function SongButton(props: Props) {
	return (
		<Box
			id={props.id}
			cursor="pointer"
			// d="flex"
			// justifyContent="center"
			// alignItems="center"
			boxShadow="2xl"
			h="6rem"
			mt="1rem"
			w="95%"
			rounded="md"
			// boxShadow="inner"
			color="rgba(255,255,255,0.9)"
			bg="rgba(255, 255, 255, 0.1)"
			_hover={{ color: '#fff', background: 'rgba(255, 255, 255, 0.15)' }}
			_active={{ boxShadow: 'none', color: '#fff' }}
			_focus={{ boxShadow: 'none', color: '#fff', background: 'rgba(255, 255, 255, 0.2)' }}
		>
			<HStack overflow="hidden">
				<Box minW="6rem" overflow="hidden">
					<Image h="6rem"  rounded="md" src={props.cover} alt="ss" />
				</Box>{' '}
				<Box d="flex" alignItems="center">
				<Tooltip label={props.title}>
					<Heading noOfLines={1} fontSize="xl" ml="4">{props.title}</Heading></Tooltip>
					
				</Box>
			</HStack>
		</Box>
	);
}

export default SongButton;
