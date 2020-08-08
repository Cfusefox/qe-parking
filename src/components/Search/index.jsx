import React from 'react'
import BMap from 'BMap'
import './index.scss'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            address: '',
            map: null
        }
    }





    onChange = (e) => {
        this.setState({
            address: e.target.value
        })
        var map = this.props.BMap;        
        map.centerAndZoom(new BMap.Point(113.2, 22.3), 16);
        var local = new BMap.LocalSearch(map, {
            renderOptions: {map: map, panel: "r-result"}
        });
        map.enableScrollWheelZoom(true); 
        local.search(e.target.value);
    }

    search = () => {

    }


    render() {
        return <div className="search-wrapper">
            <div className="address-input-wrapper">
                <input type="text" className="address-input" value={this.state.address} onChange={this.onChange}/>
                <button onClick={this.search}>search</button>
            </div>
            <div className="r-result"></div>
        </div>
    }

}

export default Search