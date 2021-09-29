import './App.css';
import { Box, Icon, Center, Text} from "@chakra-ui/react"
import { EmailIcon, AtSignIcon } from '@chakra-ui/icons'
import { FaBitcoin } from "react-icons/fa"
import ReactCountryFlag from "react-country-flag"
function App() {
  return (
    <div className="App">
    <Box bgGradient="linear(to-bl, #f2a900, #4d4d4e)">
        <Box w="100vw"h="10vh"color="#ffffff"m={["1.69420%","1.69420%","1.69420%","1.69420%"]} ><Text fontSize="1.69420rem"> <Center>Julius H.G J AI LLC</Center></Text></Box>
        <Center> 
        <Box>
        <Text fontSize="0.69420rem"h="100vh"m={["2.69420%","2.69420%","2.69420%","2.69420%"]} color="#ffffff" >
          We are a online software solutions company availible to contract. We are able to bill by the hour or by set fees based on the size and scope of the project.
          Most of our previous projects use Javascript or ASP.NET , but we are able to solve, consult, or build out most almost all based projects and software.
          Parties who are interested should <Text  color="purple" ><a href="mailto: JJAutomata@protonmail.ch">email.</a></Text>
          We are headquartered in Chicago {<ReactCountryFlag countryCode="us" />} and have offices in Tokyo. {<ReactCountryFlag countryCode="jp" />}
          <br></br>
        </Text>
        </Box>
      </Center>
    </Box>
    </div>
  );
}
export default App;
