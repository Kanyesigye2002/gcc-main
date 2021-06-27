import {combineReducers} from 'redux'

import {homeData, homeForm} from "./Home";
import {messagesData} from "./Messages";
import {changeState} from "./SideBar";
import {ImagesUpLoadData, Images, ImageCategories} from "./Images";
import {Events} from "./Events";

const rootReducer = combineReducers({
    nav: changeState,
    homeData,
    homeForm,
    ImagesUpLoadData,
    Images,
    ImageCategories,
    Events,
    messagesData

})

export default rootReducer
