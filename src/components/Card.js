export default function Card(props){
    return(
        <div className="card">
            <img src={`./images/${props.img}`} className="card-img" />

            <div className="trip-info">
                <div className="trip-header">
                    <img src="./images/gps.png" className="location-pin"/>
                    <span className="location">{props.location}</span>
                    <span className="google-maps">
                        <a href={props.link} className="link" target="_blank">
                            View on Google Maps
                        </a>
                    </span>
                </div>
                <h4>{props.startDate}-{props.endDate}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}