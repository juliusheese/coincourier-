import './App.css';
import styled from 'styled-components'
import { Box} from "@chakra-ui/react"
import { EmailIcon, AtSignIcon } from '@chakra-ui/icons'


const Div = styled.div`
font-family: 'Ubuntu', sans-serif;
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
.bod{
  margin: 2rem 3rem 2rem 3rem;
  text-align:: center;
}
`
const P = styled.p`
color:white;
margin: 1.5rem 3.2rem 1.5rem 3.2rem;
text-align:center;
.gld {
  
}
`
const Header = styled.div`

h1{
  font-size: 3rem;
  text-align:center;
  padding-top: 1rem ;
  padding-bottom: 1.5rem ;
}
h2{
  font-size: 1.5rem;
  text-align:center;
  padding-top: 1rem ;
  padding-bottom: 1rem ;
  color:"#f2a900";
}
h3{
  font-size: 1.5rem;
  text-align:center;
  padding-top: 1rem ;
  padding-bottom: 1rem ;
  color:"#f2a900";
}
`


function App() {
  return (
    <Div className="App">
      <Header >
        <Box className="hd" bg="#f2a900" w="100vw" h="8vh" color="white"> <h1>CoinCourier</h1></Box>
      </Header>
        <Box className="bod" w="100%" h="100%" >
          <P	color="white" bg="darkgrey" >
          CoinCourier is a Bitcoin private courier service with guarenteed two-hour delivery of Bitcoin contained on a secure USB-drive-like  device. 
           We are currently in a closed beta and do not offer a public iPhone or Android applications.
            Our services are only available in Cook, Lake, and Champaign county in Illinois, 
            but we plan to expand after our closed beta. Parties who are interested in joining
             the closed beta should email coincourier@pm.me with their estimated monthly purchase amount.
          </P>
          <Header>
          <Box className="hd" w="100vw" h="8vh" color="#f2a900">
        <h2><EmailIcon/>  CoinCourier{<AtSignIcon/>}pm.me</h2>
          <Box className="hd" w="100vw" h="8vh" color="white">
          <h3>If you are interested in joining the private beta and becoming a client</h3> 
          </Box>
          </Box>
          </Header>
        </Box>
    </Div>
  );
}

export default App;
