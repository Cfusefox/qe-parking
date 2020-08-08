import React from 'react'
import './index.scss'
import BMap from 'BMap'

class Map extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            customerLng: 0,
            customerLat: 0 
        }
    }

    componentDidMount() {
        var map = new BMap.Map("allmap")
        this.props.initBMap(map)
        var geolocation = new BMap.Geolocation();
        let _this=this
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() === 0){
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
                _this.setState({
                    customerLat: r.point.lat,
                    customerLng: r.point.lng
                })
                map.centerAndZoom(new BMap.Point(r.point.lng, r.point.lat), 18);
                map.enableScrollWheelZoom(true); 
            }
            else {
                alert('failed'+this.getStatus());
            }        
        },{enableHighAccuracy: true})
    }


    render() {
        return <div id="allmap"></div>
    }

}

export default Map