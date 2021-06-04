import { Image } from '@chakra-ui/image';
import { Box, Heading, Text, VStack } from '@chakra-ui/layout';
interface Props {
	id: string;
	title: string;
	cover: string;
}
function SongCard(props: Props) {
	
	return (
		<Box
			minH={["23rem","18rem","20rem","20rem"]}
			w="86%"
			cursor="pointer"
			d="flex"
			justifyContent="center"
			mt="1rem"
			rounded="md"
			boxShadow="inner"
			color="rgba(255,255,255,0.9)"
			bg="rgba(255,255,255,0.05)"
            shadow="lg"
			p="16px"
			transition="background-color .3s ease"
			_hover={{ color: '#fff', background: 'rgba(255, 255, 255, 0.15)' }}
			_active={{ boxShadow: 'none', color: '#fff' }}
			_focus={{ boxShadow: 'none', color: '#fff', background: 'rgba(255, 255, 255, 0.2)' }}
		>
			<VStack>
				<Image rounded="lg" shadow="base" src={props.cover} alt="alt" />
				<Box w="100%" alignItems="left">
					<Heading  m="2" fontSize="xl">{props.title.split(" - ")[1]}</Heading>
					<Text m="2" >{props.title.split(" - ")[0]}</Text>
				</Box>
			</VStack>
		</Box>
	);
}

export default SongCard;
