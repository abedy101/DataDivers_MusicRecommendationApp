import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

function MusicTitles(props) {

  const { track_id, artist, track, genre, pop, item, onItemClick  } = props;

  return (
        <>
            <Flex gap={'6'}>
            <Image 
                    maxW={90}
                    maxh={90}
                    src='/default_music.png'
             />
            

            <Flex direction={'column'}>
            <Text>{track}</Text>
                <Text>{artist} . {genre}</Text>
            </Flex>

            </Flex>
        </>
  )
}

export default MusicTitles