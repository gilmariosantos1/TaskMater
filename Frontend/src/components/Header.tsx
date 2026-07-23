import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/react';
import { useHistory, useLocation } from 'react-router';

interface HeaderProps {
    title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'TaskMaster' }) => {
    const history = useHistory();
    const location = useLocation();

    const isLoginPage = location.pathname === '/login';
    const buttonLabel = isLoginPage ? 'Cadastro' : 'Login';
    const targetRoute = isLoginPage ? '/cadastro' : '/login';

    return (
        <IonHeader>
            <IonToolbar color="primary">
                <IonTitle>{title}</IonTitle>
                <IonButtons slot='end'>
                    <IonButton onClick={() => history.push(targetRoute)}>
                        {buttonLabel}
                    </IonButton>
                </IonButtons>
            </IonToolbar>
                
        </IonHeader>
    )
}

export default Header;