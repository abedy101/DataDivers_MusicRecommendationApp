import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

function MusicTitles() {
  return (
        <>
            <Flex gap={'6'}>
            <Image 
                    maxW={100}
                    maxh={100}
                    src='/default_music.png'
             />
            

            <Flex direction={'column'}>
            <Text>Song Name</Text>
                <Text>Artist . Album Name . Minutes</Text>
            </Flex>

            </Flex>
        </>
  )
}

export default MusicTitles