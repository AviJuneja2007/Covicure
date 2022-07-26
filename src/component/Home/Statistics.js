import React,{ Component} from 'react';
import "./stats.css";
import virusPic from "../images/virus.png";
import maskPic from "../images/mask.png";
import heartPic from "../images/heart.png";
import deathPic from "../images/death.png";

class Statistics extends Component{

    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
    }

    render(){
        const { DataisLoaded, items } = this.state;
        console.log(items);
        return ( 
            <>
                <div className="stats">
                    <h4>Coronavirus statistics</h4>
                    <h6>Data Refreshes Every 24 Hours</h6>
                    <div className="lists">
                        <div className="list-item">
                            <img src = {virusPic} alt="" />
                            <h4>{items.totalCases}</h4>
                            <p>Total Cases</p>
                        </div>
                        <div className="list-item">
                            <img src = {maskPic} alt="" />
                            <h4>{items.activeCases}</h4>
                            <p>Active Cases</p>
                        </div>
                        <div className="list-item">
                            <img src = {heartPic} alt="" />
                            <h4>{items.recovered}</h4>
                            <p>Recovered Cases</p>
                        </div>
                        <div className="list-item">
                            <img src = {deathPic} alt="" />
                            <h4>{items.deaths}</h4>
                            <p>Deaths</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Statistics