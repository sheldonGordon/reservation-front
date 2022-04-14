import RoleItem from "./RoleItem";
import {useSelector} from "react-redux";

const RoleList = () => {
    const roles = useSelector((state) => state.roles.roles)
    return (
        <>
            {roles.map((r) => (
                <RoleItem
                    role={r}
                    key={r.id}
                />
            ))}
        </>
    );
};

export default RoleList;