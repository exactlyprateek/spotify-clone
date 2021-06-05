import { Box, Container, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/layout';
import { useState } from 'react';
import NavButton from './comps/NavButton';
import SongButton from './comps/SongButton';
import SongCard from './comps/SongCard';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const options = [
	{
		name: 'Luis Fonsi - Despacito',
		musicSrc:
			'https://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
		cover:
			'https://res.cloudinary.com/dzjtgtjaj/image/upload/v1622807997/Luis_Fonsi_Feat._Daddy_Yankee_-_Despacito__28Official_Single_Cover_29_udjka4.png'
	},
	{
		name: "Don't Let me down",
		musicSrc: 'https://res.cloudinary.com/dzjtgtjaj/video/upload/v1622807454/Don_t_Let_Me_Down_c9vjbm.mp3',
		cover:
			'https://res.cloudinary.com/dzjtgtjaj/image/upload/v1622808146/Don_27t_Let_Me_Down__28featuring_Daya_29__28Official_Single_Cover_29_by_The_Chainsmokers_thax6i.png'
	},
	{
		name: 'Nirvana - All Apologies',
		musicSrc: 'https://res.cloudinary.com/dzjtgtjaj/video/upload/v1622807915/All_Apologies_-_Nirvana_eurvxg.mp3',
		cover: 'https://res.cloudinary.com/dzjtgtjaj/image/upload/v1622808216/R-1003299-1423912611-3812.jpeg_yow2zv.jpg'
	},
	{
		name: 'Avicii - Without You',
		musicSrc: 'https://res.cloudinary.com/dzjtgtjaj/video/upload/v1622807914/Avicii_-_Without_You_y9puan.mp3',
		cover:
			'https://res.cloudinary.com/dzjtgtjaj/image/upload/v1622808189/artworks-000237469700-lm76po-t500x500_ypz4bb.jpg'
	},
	{
		name: 'Trevor Daniel - Falling',
		musicSrc: 'https://res.cloudinary.com/dzjtgtjaj/video/upload/v1622807971/Trevor_Daniel_-_Falling_bkxbql.mp3',
		cover: 'https://res.cloudinary.com/dzjtgtjaj/image/upload/v1622808338/Trevor_Daniel_-_Falling_dvwvhm.png'
	},
	{
		name: 'Alan Walker - Faded',
		musicSrc: 'https://res.cloudinary.com/dzjtgtjaj/video/upload/v1622807931/Alan_Walker_-_Faded_xrrxyr.mp3',
		cover: 'https://res.cloudinary.com/dzjtgtjaj/image/upload/v1622808168/Alan_Walker_-_Faded_qepa9h.png'
	},
	{
		name: 'Linkin Park - In The End',
		musicSrc:
			'https://res.cloudinary.com/dzjtgtjaj/video/upload/v1622809118/In_The_End_Official_Video_-_Linkin_Park_ttvdte.mp3',
		cover: 'https://res.cloudinary.com/dzjtgtjaj/image/upload/v1622809428/500x500_rrlqxx.jpg'
	},
	{
		name: 'Green Day - Wake Me Up When September Ends',
		musicSrc:
			'https://res.cloudinary.com/dzjtgtjaj/video/upload/v1622809243/Green_Day-Wake_Me_Up_When_September_Ends_lyrics_t5qqof.mp3',
		cover: 'https://res.cloudinary.com/dzjtgtjaj/image/upload/v1622812631/eg59zpr3_jpllki.jpg'
	},
	{
		name: 'Radiohead - Creep',
		musicSrc: 'https://res.cloudinary.com/dzjtgtjaj/video/upload/v1622809690/Radiohead_-_Creep_dxy9jp.mp3',
		cover: 'https://res.cloudinary.com/dzjtgtjaj/image/upload/v1622810276/Radiohead_original_creep_cover_eiwjjp.jpg'
	},
	{
		name: 'JOJI - RIP',
		musicSrc: 'https://res.cloudinary.com/dzjtgtjaj/video/upload/v1622809749/Joji_-_RIP_xlnmdy.mp3',
		cover:
			'https://res.cloudinary.com/dzjtgtjaj/image/upload/v1622810145/artworks-000444269142-jn6l4y-t500x500_clopm4.jpg'
	},
	{
		name: 'One Direction - Night Changes',
		musicSrc:
			'https://res.cloudinary.com/dzjtgtjaj/video/upload/v1622809932/Night_Changes_-_One_Direction_hewla2.mp3',
		cover:
			'https://res.cloudinary.com/dzjtgtjaj/image/upload/v1622810132/One_Direction_-_Night_Changes_Single_Cover_icska0.png'
	},
	{
		name: 'Queen - Bohemian Rhapsody',
		musicSrc:
			'https://res.cloudinary.com/dzjtgtjaj/video/upload/v1622810117/Queen-Bohemian-Rhapsody-_-RetroJamz.com__tgjbu2.mp3',
		cover: 'https://res.cloudinary.com/dzjtgtjaj/image/upload/v1622810266/Bohemian_Rhapsody_npe9k0.png'
	},
	{
		name: 'Selena Gomez - Only You',
		musicSrc: 'https://res.cloudinary.com/dzjtgtjaj/video/upload/v1622810425/Only_You_r45otv.mp3',
		cover:
			'https://res.cloudinary.com/dzjtgtjaj/image/upload/v1622810862/74de56dac086eadead12c098ee772461.1000x1000x1_zviefz.jpg'
	},
	{
		name: 'YUNGBLUD - Time in a Bottle',
		musicSrc:
			'https://res.cloudinary.com/dzjtgtjaj/video/upload/v1622810236/YUNGBLUD_-_Time_in_a_Bottle_Opening_Song_-_Hobbs_MP3_128K_q8jjyv.mp3',
		cover:
			'https://res.cloudinary.com/dzjtgtjaj/image/upload/v1622810371/artworks-ZV6O6Sfkbiu3-0-t500x500_ekn2ur.jpg'
	},
	{
		name: 'Tame Impala - The Less I Know The Better',
		musicSrc:
			'https://res.cloudinary.com/dzjtgtjaj/video/upload/v1622810588/Tame-Impala-The-Less-I-Know-The-Better_igpy70.mp3',
		cover:
			'https://res.cloudinary.com/dzjtgtjaj/image/upload/v1622812491/artworks-000131268860-42kcxa-t500x500_vkr599.jpg'
	},
	{
		name: 'Sleeping At Last - Saturn',
		musicSrc: 'https://res.cloudinary.com/dzjtgtjaj/video/upload/v1622810528/Sleeping_At_Last_Saturn_zmnkff.mp3',
		cover:
			'https://res.cloudinary.com/dzjtgtjaj/image/upload/v1622812511/artworks-000262175996-6q9ovb-t500x500_gbhene.jpg'
	}
];

function Home() {
	const [ track, setTrack ] = useState(0);
	return (
		<div style={{ overflow: 'hidden', maxHeight: '100vh' }}>
			<title>{options[track].name}</title>
			<Router>
				<HStack style={{ maxHeight: '100%', minHeight: '100vh', background: '#212121' }}>
					<Box minW="12rem" w="16vw" minH="100vh" h="100%" bg="#121212" d="flex" justifyContent="center">
						<VStack mt="4" w="12vw">
							<Link style={{minWidth: '10rem', width:"100%"}} to={"/"}>
							<NavButton text="Home" />
							</Link>
							<Link style={{minWidth: '10rem', width:"100%"}} to={"/discover"}>
							<NavButton text="Discover" />
							</Link>
						</VStack>
					</Box>
					<Container
						style={{ overflowX: 'hidden' }}
						overflow="scroll"
						m="0"
						p="2rem 2rem 8rem 2rem"
						h="100vh"
						color="white"
						maxW="100%"
					>
						<Route
							path="/"
							render={() => (
								<div>
									<Heading>Good Afternoon</Heading>
									<SimpleGrid minChildWidth="280px" columns={[ 1, 2, 4, 4 ]}>
										{[ 0, 1, 2, 3, 4, 5, 6, 7 ].map((i, idx) => (
											<div onClick={() => setTrack(i)}>
												<SongButton
													title={options[i].name}
													cover={options[i].cover}
													id={`${i}`}
												/>
											</div>
										))}
									</SimpleGrid>
								</div>
							)}
						/>
						<Route
							path="/discover"
							render={() => (
								<div>
									{' '}
									<Heading fontSize="2xl" mt="2rem">
										Get creative
									</Heading>
									<SimpleGrid minChildWidth="15rem" columns={[ 1, 2, 4, 4 ]}>
										{[ 8, 9, 10, 11, 12, 13, 14, 15 ].map((i, idx) => (
											<div onClick={() => setTrack(i)}>
												<SongCard
													id={`${i}`}
													cover={options[i].cover}
													title={options[i].name}
												/>
											</div>
										))}
									</SimpleGrid>
								</div>
							)}
						/>
					</Container>{' '}
				</HStack>
			</Router>
			<Box
				transform="translate(0px, -80px)"
				bottom="0"
				w="100%"
				borderTop="1px solid rgba(255, 255, 255, 0.2)"
				bg="#1e1e1e"
				h="80px"
				d="flex"
				alignItems="center"
				justifyContent="center"
			>
				<ReactJkMusicPlayer
					remember={true}
					showDownload={false}
					showReload={false}
					remove={false}
					responsive={false}
					showThemeSwitch={false}
					toggleMode={false}
					playIndex={track}
					mode="full"
					audioLists={options}
				/>

				{/* <audio controls src="\Trevor Daniel - Falling (Official Music Video).mp3">
					Your browser does not support the
					<code>audio</code> element.
				</audio> */}
			</Box>
		</div>
	);
}

export default Home;
