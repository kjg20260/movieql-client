import { Link } from "react-router-dom";

export default function Headers() {
    return (
        <header className="wrap_padding css-vfh4pc e10hkk351">
            <Link to={'/'}>
                <h1 className="css-116irpw e10hkk352">홈</h1>
            </Link>
            <aside className="css-13co1xy e10hkk350"><button type="button" className="css-xyumn e10hkk356">찾기</button>
            </aside>
        </header>
    )
};