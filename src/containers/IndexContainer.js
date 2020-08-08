import { connect } from 'react-redux'
import Index from '../views/Index'
import { initBMap } from '../actions/index'

const mapStateToProps = state => {
    return {
      BMap: state.BMap
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      initBMap: (BMap) => {
          dispatch(initBMap(BMap))
      }
    }
  }
  
const IndexContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Index)

export default IndexContainer