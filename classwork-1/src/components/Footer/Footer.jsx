function Footer(){
    return (
        <footer className="bg-light text-center py-3 d-flex justify-content-center align-items-start" >
            <div >
                <p className="mb-0"> © {new Date().getFullYear()} React App</p>
            </div>
        </footer>
    );
}

export default Footer;