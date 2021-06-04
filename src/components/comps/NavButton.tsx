import { Button } from '@chakra-ui/button';
interface Props {
    text: string;
}
function NavButton(props: Props) {
    return (
        <Button
            w="100%"
            h="3rem"
            rounded="md"
            boxShadow="inner"
            color="rgba(255,255,255,0.9)"
            bg="#transparent"
            _hover={{ color: '#fff', background: 'rgba(255, 255, 255, 0.1)' }}
            _active={{ boxShadow: 'none', color: '#fff', background: 'rgba(255, 255, 255, 0.1)' }}
            _focus={{ boxShadow: 'none', color: '#fff', background: 'rgba(255, 255, 255, 0.2)' }}
        >
            {props.text}
        </Button>
    );
}

export default NavButton;
