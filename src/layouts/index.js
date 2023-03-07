import React from 'react'

import PublicLayout from './Public'

const Layout = ({ children, ...props }) => {
    // if (props.isAuthenticated) {
    //     return <PrivateLayout {...props}>{children}</PrivateLayout>;
    // }
    return <PublicLayout {...props} children={children} />;
}

export default Layout