import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Teste from '../../pages/Welcome';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Teste />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
