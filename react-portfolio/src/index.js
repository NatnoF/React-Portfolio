import * as React from "react";
import ReactDOM from 'react-dom';
import { Example } from "./components/Example";

import "./components/style.css";
import "./components/styles.css";

const App = () => <Example />;

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>, document.getElementById('root'));
