'use client';

import MusicTitles from '@/components/music-tiles'
import SearchBar from '@/components/search-bar-with-box'
import { Box, Flex, Heading, List, Text, Image } from '@chakra-ui/react'
import React from 'react'

function Recommendation() {

  return (
    <Box width='100%' p={8}>
        <Box width='70%' alignItems={'center'} >
        {/* <SearchBar /> */}
        
        <Flex direction={'column'} mt={8} gap={'6'}>
            {/* 
            //TODO : Using prop pass the 
            */}
            <Heading size={'lg'}>Song 'Song Name user Selected'</Heading>

            <Flex gap={'4'}>

            <Image 
                    maxW={150}
                    maxh={150}
                    src='/default_music.png'
             />


            <Flex direction={'column'}>
                <Text>Song Name</Text>
                <Text>Artist . Album Name . Minutes</Text>
            </Flex>

            </Flex>
        </Flex>
        </Box>
        
        <Flex direction={'column'} mt={8} width='70%'>
            
            <Heading>You Might Also Like</Heading>
            
            <List mt={6} spacing={6}>
                <MusicTitles/>
                <MusicTitles/>
                <MusicTitles/>
                <MusicTitles/>
                <MusicTitles/>
                <MusicTitles/>
                <MusicTitles/>
                <MusicTitles/>
            </List>
        </Flex>        
    </Box>
  )
}

export default Recommendation