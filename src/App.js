import './App.css';
import { Box, Icon, Center, Text} from "@chakra-ui/react"
import { EmailIcon, AtSignIcon } from '@chakra-ui/icons'
import { FaBitcoin } from "react-icons/fa"
import ReactCountryFlag from "react-country-flag"
function App() {
  return (
    <div className="App">
    <Box bgGradient="linear(to-bl, #f2a900, #4d4d4e)">
        <Box w="100vw"h="10vh"color="#ffffff"m={["1.69420%","1.69420%","1.69420%","1.69420%"]} ><Text fontSize="1.69420rem"> <Center>IN COLLEGIUM{<Icon color="#f2a900"as={FaBitcoin}></Icon>}</Center></Text></Box>
        <Center> 
        <Box>
        <Text fontSize="0.69420rem"h="100vh"m={["2.69420%","2.69420%","2.69420%","2.69420%"]} color="#ffffff" >
          We are a Guild with an on the ground emphasis to improving the protocol.
          Our services include a 1 hour delivery service of an audio disc.
          WE are availible in the north shore of Chicago.
          We plan to expand to more locations soon like Sangamon, and Champaign County Illinois.
          Parties who are interested in recieving audio CDs or joining the team should email <Center><Text  color="purple" ><a href="mailto: JJAutomata@protonmail.ch">us</a></Text></Center>
          We are headquartered in Glencoe {<ReactCountryFlag countryCode="us" />} but have friends in Japan {<ReactCountryFlag countryCode="jp" />} :)
          We prefer emails with keys so make sure to follow the protocol ...
          We are also building a proprietary ATM just for kicks.
          Our audio discs can be delivered using Uber parcel, but if you want insurance on your CD we can provide a private driver with insurance for a fee.
          Since we are still in beta, we only offer delivery of discs with under 420,000 satoshi.
          We run technology using the lightning network and
          <Center><Text  color="purple" ><a href="getumbrel.com">Umbrel</a></Text></Center>
          to deliver funds.
          Further instructions on how to access your funds will be provided for on the audio disc.
          Ask us about metal coin delivery!
          <br></br>
          bitcoin.delivery is not a money transmitter because we are delivering property
          <br></br>
        </Text>
        </Box>
      </Center>
    </Box>
    </div>
  );
}
export default App;
