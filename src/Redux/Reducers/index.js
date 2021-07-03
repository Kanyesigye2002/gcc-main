import {combineReducers} from 'redux'

import {homeData, homeForm} from "./Home";
import {messagesData} from "./Messages";
import {changeState, changeState2} from "./SideBar";
import {ImagesUpLoadData, Images, ImageCategories} from "./Images";
import {Events} from "./Events";
import auth from '../AdminReducers/reducers/auth'

const rootReducer = combineReducers({
    auth,
    nav: changeState,
    nav2: changeState2,
    homeData,
    homeForm,
    ImagesUpLoadData,
    Images,
    ImageCategories,
    Events,
    messagesData

})

export default rootReducer
