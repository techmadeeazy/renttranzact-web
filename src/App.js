import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import Routes from './routes';


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<ChakraProvider>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</ChakraProvider>
	);
}

export default App;
