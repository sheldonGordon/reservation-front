const RoleItem = (props) => {
    const { role } = props;

    return (
        <div>
            <label>
                {role.libelle}
            </label>
        </div>
    );
};

export default RoleItem;