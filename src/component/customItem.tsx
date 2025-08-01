import React, { ReactNode } from "react";

interface Iitem{
    imageName: string;
    children?: ReactNode;
    color: string;
}

const CustomItem: React.FC<Iitem> = ({imageName,children, color}) => {
    return(
        <>
            <div style={{display:'flex', gap:'15px',alignItems:'center', color:color}}>
                <img src= {imageName}></img>
                <div>{children}</div>
            </div>
        </>
    )
}

export default CustomItem;