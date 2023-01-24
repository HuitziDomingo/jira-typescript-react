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

    return (
        <UIContext.Provider value={{ sidemenuOpen: false }}>
            {children}
        </UIContext.Provider>
    )
}