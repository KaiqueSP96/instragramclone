import { Box, Image, VStack, Input, Button, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {

	const [isLogin, setIsLogin] = useState(true);

	const navigate = useNavigate();

	const [inputs, setInputs] = useState ({
		email: '',
		password: '',
		confirmPassword: ''
	});

	const handleAuth = () => {
		if(!inputs.email || !inputs.password) {
			alert('Please fill all the fields.')
			return;
		} 
		navigate("/")
	};


  return <>
    
    <Box border={'1px solid gray'} borderRadius={4} padding={5}>
		<VStack spacing={4}>
			<Image src='/logo.png' h={24} cursor={'pointer'} alt='Instagram Logo'></Image>

			<Input placeholder='Email' fontSize={14} type='email' value={inputs.email} onChange={(e) => setInputs({...inputs, email:e.target.value})}/>

			<Input placeholder='Password' fontSize={14} type='password' value={inputs.password} onChange={(e) => setInputs({...inputs, password:e.target.value})}/>

			{!isLogin ? (
				<Input placeholder='Confirm Password'  fontSize={14} type='password' value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs, confirmPassword:e.target.value})} />
			) : null}

			<Button onClick={handleAuth} w={'full'} colorScheme='blue' size={'sm'} fontSize={14}>
				{isLogin? 'Log in' : 'Sign up' }
			</Button>


			<Flex alignItems={'center'} justifyContent={'center'} my={4} gap={1} w={'full'}>
				<Box flex={2} h={0.2} bg={'gray.400'} />
				<Text mx={1} color={'white'}>OR</Text>
				<Box flex={2} h={0.2} bg={'gray.400'} />
			</Flex>

			<Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
				<Image w={5} alt='Google Logo' src='/public/google.png'/>
				<Text mx='2' color={'blue.500'}>
					Log in with Google
				</Text>
			</Flex>

		</VStack>
	</Box>


	<Box border={'1px solid gray'} borderRadius={4} padding={5}>
		<Flex alignItems={'center'} justifyContent={'center'}>
			<Box mx={2} fontSize={14}>
				{isLogin ? "Don't a have account?" : "Already have an account?"}
			</Box>
			<Box cursor={'pointer'} onClick={() => setIsLogin(!isLogin)} color={'blue.500'}>
				{isLogin ? 'Sign up' : 'Log in'}
			</Box>
		</Flex>		
	</Box>

    </>;
};

export default AuthForm;
