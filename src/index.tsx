import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';

import App from './App';

const container = document.getElementById('app');
const root = createRoot(container as HTMLElement);

root.render(
    <Provider store={ store }>
        <App />
    </Provider>
);