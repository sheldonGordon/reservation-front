import React from 'react';
import { useDispatch } from 'react-redux'
import { getAllRolesAsync } from "../roleSlicer";
import RoleList from "./RoleList";

export function Role() {
    const dispatch = useDispatch()
    dispatch(getAllRolesAsync())

    return(
        <div>
            <p>coucou</p>
            <RoleList/>
        </div>
    );
}