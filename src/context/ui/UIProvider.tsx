import { FC, useReducer } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState {
    sidemenuOpen: boolean
}

interface Props {
    children?: JSX.Element | JSX.Element[]
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false
}

export const UIProvider: FC = ({ children }: Props) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openSideMenu = () => {
        dispatch({type: 'UI - Open Sidebar'})
    }

    const closeSideMenu = () => {
        dispatch({type:'UI - Close Sidebar'})
    }

    return (
        <UIContext.Provider value={{ 
            // sidemenuOpen: state.sidemenuOpen //Esto es lo mismo que la siguinete linea 
            ...state,
            openSideMenu, 
            closeSideMenu
        }}>
            {children}
        </UIContext.Provider>
    )
}