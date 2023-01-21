import * as React from 'react';
import { Box } from "@mui/material"
import Head from "next/head"
import { NavBar, SideBar } from '../ui'


interface Props {
    title?: string
    children?: JSX.Element | JSX.Element[]
}

export const Layout: React.FC<Props> = ({ title = '0penJira', children }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>

            <NavBar />
            <SideBar />
            
            <Box sx={{ padding: '10px 20px' }}>
                {children}
            </Box>
        </Box>
    )
}


