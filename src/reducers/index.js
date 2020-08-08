export default (state = {}, action) => {
    switch( action.type ) {
        case 'INIT_BMAP':
            let stateCopy = {...state}
            stateCopy.BMap = action.BMap
            return stateCopy
         default:
             return state
    }
 }