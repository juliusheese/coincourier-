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
          Our services include a 1 hour delivery service of a device that could be blank or not.
          Ask us about metal coin wallet delivery.
          Our services are in Cook, Lake, Sangamon, and Champaign County in Illinois, US.
          We are also building a proprietary ATM device.
          We plan to expand to more locations soon. Parties who are interested in joining the team should email:<Center><Text  color="purple" ><a href="mailto: initiation@bitcoinwallet.delivery"> initiation@bitcoinwallet.delivery </a></Text></Center>
          We are headquartered in Chicago : Des Moines {<ReactCountryFlag countryCode="us" />} and have technical support in Estonia {<ReactCountryFlag countryCode="ee" />}. We hold an Estonian activity license for a provider of
          Virtual Currency Services (VCS {<Icon color="#f2a900" as={FaBitcoin} ></Icon>} ) once we are out of beta and follow all rules under the Money Laundering and Terrorist Financing Prevention Act.  
          We prefer emails with keys so make sure to follow the protocol
          .日本のクライアント：私達に電子メールを送ってください！نحن نحب العملاء الدوليين.
          <br></br>
        </Text>
        </Box>
      </Center>
    </Box>
    </div>
  );
}
export default App;
