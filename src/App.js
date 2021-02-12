import './App.css';
import styled from 'styled-components'
import { Box, Icon, Center} from "@chakra-ui/react"
import { EmailIcon, AtSignIcon } from '@chakra-ui/icons'
import { FaBitcoin } from "react-icons/fa"
import ReactCountryFlag from "react-country-flag"


const Div = styled.div`
font-family: 'Ubuntu', sans-serif;
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
.bod{
  text-align:: center;
}
a{
  text-decoration:none;
  color:#f2a900;
}
`
const P = styled.p`
color:white;
margin: 1.5rem 3.2rem 1.5rem 3.2rem;
text-align:center;
`
const Header = styled.div`


h1{
  font-size: 3rem;
  text-align:center;
}
h2{
  font-size: 1.5rem;
  text-align:center;
  color:"#f2a900";
}
h3{
  font-size: 1.5rem;
  text-align:center;
  color:"#f2a900";
}
`


function App() {
  return (
    <Div className="App">
      <Header >
        <Box className="hd" bgGradient="linear(to-l, #4d4d4e, #f2a900)" bg="" w="100vw" h="8vh" color="white" p={[14,14,14,14]} m={[0,14,14,0]}> <h1>CoinCourier {<Icon color="#f2a900" as={FaBitcoin} ></Icon>}</h1></Box>
      </Header>
      <Center>
        <Box className="bod" w="70vw" h="100%" text-align="center" >
          <P	color="white"  >
          CoinCourier is a Bitcoin private courier service with guaranteed two-hour delivery of Bitcoin contained on a secure USB-drive-like  device. 
           We are currently in a closed beta and do not offer a public iPhone or Android applications.
            Our services are only available in Cook, Lake, and Champaign county in Illinois, 
            but we plan to expand after our closed beta. Parties who are interested in joining
             the closed beta should email <a color="#f2a900" href = "mailto: coincourier@pm.me"> {<EmailIcon/>} coincourier{<AtSignIcon/>}pm.me </a> with their estimated monthly purchase amount. Our delivery services are headquarted in 
             Chicago and our technological services are headquarted in Estonia {<ReactCountryFlag countryCode="ee"/>}. We hold an Estonian activity licence for a provider of 
             virtual currency services (VCS {<Icon color="#f2a900" as={FaBitcoin} ></Icon>} ) and  follow all rules under the Money Laundering and Terrorist Financing Prevention Act.
          </P>
          </Box>

          </Center>
          <Header>
          <Box className="hd" w="100vw" h="8vh" color="#f2a900">
          <a href = "mailto: coincourier@pm.me">
        <h2><EmailIcon/>  CoinCourier{<AtSignIcon/>}pm.me</h2>
        </a>
        </Box>
          <Box className="hd" w="100vw" h="8vh" color="white" m={[20,20,20,20]}>
          <h3>If you are interested in joining the private beta and becoming a client please email!</h3> 
          </Box>
          </Header>
    </Div>
  );
}

export default App;
