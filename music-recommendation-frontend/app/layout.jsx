
import Navbar from '@/components/navbar'
import { ChakraProvider } from '@chakra-ui/react'
export const metadata = {
  title: 'RecNN',
  description: 'Recommend the playlist based on the songs you search',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" h='100%'>
      <body h='100%'>
        <ChakraProvider>
          <Navbar/>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
