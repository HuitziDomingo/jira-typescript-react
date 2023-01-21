import { FC } from 'react'
import { UIContext } from './UIContext'

export interface UIState {
    sidemenuOpen: boolean
}

const UI_INITIAL_STATEL: UIState = {
    sidemenuOpen: false
}

export const UIProvider: FC = () => {
    return (
        <div></div>
    )
}