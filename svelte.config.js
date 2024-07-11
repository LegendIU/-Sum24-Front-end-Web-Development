import adapter from '@sveltejs/adapter-static';

const config = {
    kit: {
        adapter: adapter({
            // Настройка путей для GitHub Pages
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false,
            paths: {
                base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : ''
            }
        })
    }
};

export default config;
