import * as React from 'react';
import { AuthContext } from '../context';

export default function SignOut() {
    const { signOut } = React.useContext(AuthContext)
    return (
        signOut()
    )
}