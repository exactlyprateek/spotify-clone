import { Box } from '@chakra-ui/layout';
import React from 'react';

function Player() {
    function handlePlay (){
        console.log("play");
    }
	return (
		<Box transform="translate(0px, -80px)" bottom="0" w="100%" bg="black" h="80px">
			<audio onPlay={handlePlay} controls src="\Trevor Daniel - Falling (Official Music Video).mp3">
				Your browser does not support the
				<code>audio</code> element.
			</audio>
		</Box>
	);
}

export default Player;
