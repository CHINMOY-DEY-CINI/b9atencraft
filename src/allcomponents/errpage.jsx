import { Link} from "react-router-dom"






function Errpage() {


    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
            <h1>404 Page Not Found</h1>
            <Link to='/' className="btn btn-accent mt-4"><button>Back Home</button></Link>
            </div>
        </div>
    )
}

export default Errpage