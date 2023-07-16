import React from 'react'
import MyNavBarClient from '../Components/MyNavBarClient'

export default function MainLayoutClient({ children }) {
return (
    <div>
        <MyNavBarClient />
        <div>{children}</div>
    </div>
)
}
