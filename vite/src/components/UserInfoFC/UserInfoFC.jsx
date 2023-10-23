import "./userinfo.css"

export const UserInfoFC = (props) => {
    const { user } = props
    return (
        <article className="user">
            <img src={user.avatar} alt={`${user.name} avatar`}/>
            <h2 className="user__name">{user.name}
                {/* {user.name === "Ivan" ? "Admin" : "User"} */}
            </h2>
            <p style={{ backgroundColor: "tomato" }}>{user.status}</p>
            <label htmlFor="1">Active</label>
            <input id="1" type="checkbox" />
        </article>
  );
}
