import React, { createContext, useContext, useState } from "react";

interface IProps {
    showCreateMenu: boolean;
    setShowCreateMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const PageContext = createContext<IProps | undefined>(undefined);

export const PageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [showCreateMenu, setShowCreateMenu] = useState<boolean>(false);

    const contextValue: IProps = {
        showCreateMenu,
        setShowCreateMenu
    };

    return (
        <PageContext.Provider value={ contextValue }>
            { children }
        </PageContext.Provider>
    );

}; 

export const usePageContext = () => {
    const context = useContext(PageContext);

    if (context === undefined) {
        throw new Error('useTemplateManagementContext must be used within an PageProvider');
    }

    return context;
};