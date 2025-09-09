import Button from "./Button";
function UserCard({name, email}){
    return(
        <div className="card shadow-sm">
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
                <Button text="Связаться"/>
                
            </div>
        </div>

    );

}

export default UserCard;