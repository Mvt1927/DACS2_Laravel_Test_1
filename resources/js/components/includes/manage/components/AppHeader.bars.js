import React from 'react'
import {
    useSelector,
    useDispatch
} from 'react-redux'
const Bars = () => {
    const dispatch = useDispatch()
    const sidebarShow = useSelector((state) => state.sidebarShow)
    return (
        <i className="fal fa-bars p-2" onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}></i>
    )
}

export default Bars
