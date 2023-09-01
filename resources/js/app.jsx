import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/configureStore';
import Modal from 'react-modal';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

Modal.setAppElement('#app');

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./${name}.jsx`, import.meta.glob('./**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App {...props} />
                </PersistGate>
            </Provider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
