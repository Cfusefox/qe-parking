import React from 'react'
import Map from '../../components/Map/index'
import './index.scss'
import Search from '../../components/Search'

class Index extends React.Component {
    constructor(props) {
        super(props)
    }
    


    render() {
        return <div className="index-page">
            <Search BMap={this.props.BMap} />
            <Map initBMap={this.props.initBMap} BMap={this.props.BMap} />
        </div>
    }
}

export default Index