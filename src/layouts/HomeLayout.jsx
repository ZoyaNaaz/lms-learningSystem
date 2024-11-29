import Footer from '../components/Footer';

function HomeLayout({ children }){
    return(
        <>
            {children}
            <Footer />
        </>
    );
}

export default HomeLayout;