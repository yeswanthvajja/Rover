const dev ={
    API_URL: 'http://localhost:23326', // No Trailing Slash at end
    CONTAINER: false
};

const prod ={
    CONTAINER: true
};

const config=process.env.NODE_ENV==='development'?dev:prod;

export default config;