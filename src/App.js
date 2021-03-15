import './App.css';
import { Box, Icon, Center, Text} from "@chakra-ui/react"
import { EmailIcon, AtSignIcon } from '@chakra-ui/icons'
import { FaBitcoin } from "react-icons/fa"
import ReactCountryFlag from "react-country-flag"
function App() {
  return (
    <div className="App">
    <Box bgGradient="linear(to-bl, #f2a900, #4d4d4e)">
        <Box w="100vw"h="10vh"color="#ffffff"m={["1.69420%","1.69420%","1.69420%","1.69420%"]} ><Text fontSize="1.69420rem"> <Center>bitcoinwallet.delivery{<Icon color="#f2a900"as={FaBitcoin}></Icon>}</Center></Text></Box>
        <Center> 
        <Box>
        <Text fontSize="0.69420rem"h="100vh"m={["2.69420%","2.69420%","2.69420%","2.69420%"]} color="#ffffff" >
          We are a Bitcoin private courier service with guaranteed two-hour delivery of a secure device containing Bitcoin.
          We are in beta and do not offer a public iPhone or Android app.
          Our services are available in Cook, Lake, and Champaign county in Illinois, USA.
          We plan to expand to more locations after beta. Parties who are interested in joining the beta should email:
          <Center><Text color="purple" href="mailto: initiation@bitcoinwallet.delivery"> {<EmailIcon />} initiation{<AtSignIcon />}bitcoinwallet.delivery </Text></Center>
          Our delivery services are headquarted in
          Chicago {<ReactCountryFlag countryCode="us" />} and our technological services are headquarted in Estonia {<ReactCountryFlag countryCode="ee" />}. We hold an Estonian activity licence for a provider of
          Virtual Currency Services (VCS {<Icon color="#f2a900" as={FaBitcoin} ></Icon>} ) and follow all rules under the Money Laundering and Terrorist Financing Prevention Act.  
          We will only accept emails for addresses enabled with keys so make sure all your addresses are set up properly.
          日本のクライアント：私達に電子メールを送ってください！
        </Text>
        </Box>
      </Center>
    </Box>
    </div>
  );
}
export default App;
