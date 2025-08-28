function ProfileCard(){
    return (
        <div className="card mx-auto mt-5">
            <img src="https://avatar.iran.liara.run/public" alt="avatar" className="card-img-top" />
            <div className="card-body text-center">
                <h5 className="card-title">Айдос Амангельды</h5>
                <p className="card-text">Email: amangeldiaidos660@gmail.com</p>
                <a href="https://github.com/AlmaURepos/react.git" className="btn btn-primary">Github</a>
            </div>
        </div>
    );
}

export default ProfileCard;