
import 'bootstrap/dist/css/bootstrap.min.css';
const Navigation = ()=> {

    return(
        <>

            <div >
                <ul className="d-flex bg-light justify-content-center text-decoration-none text-white gap-4 h-50 p-2">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
            </div>

        </>
    )


}

export default Navigation;