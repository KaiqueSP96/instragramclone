import {Box, Flex} from '@chakra-ui/react';
import SideBar from '../../components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom';

const PageLayout = ({ children }) => {
 
  const {pathName} = useLocation();

  return <>

  {/* Conteudo Lado esquerdo */}
    <Flex>
      {pathName !== '/auth' ? (
        <Box w={{base: '700px', md: '240px'}}>
        <SideBar />
      </Box>
      ): null}

  {/* Conteudo Lado Direito/Meio */}
      <Box flex={1} w={{base: 'calc(100% - 70px)', md: 'calc(100% - 240px)'}}>
        {children}
      </Box>
    </Flex>
   
  </>
};

export default PageLayout;
