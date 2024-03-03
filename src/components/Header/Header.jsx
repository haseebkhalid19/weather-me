import './header.css'
import cloud from '../../assets/weather-cloud.svg'

const Header = () => {

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li id='logo'>
                            <a href="#">
                                <img src={cloud} alt="" className='cloud'/>
                                WeatherMe
                                <span id='time'>21:00 pm</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='active'>
                                Today
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Tommorow
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Monthly Forecast
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;