import '../styles/global.css'


const App = ({ Component, pageProps }) => {
    return (
        <>
            <h2>This is an app file</h2>
            <Component {...pageProps} />
        </>
    );
}

export default App;