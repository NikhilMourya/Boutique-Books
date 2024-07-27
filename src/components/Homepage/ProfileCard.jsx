const ProfileCard = ({ img, title }) => {
    return (
        <>
            <div className="profile-card">
                <div className="m-2 p-2 grid grid-cols-7 grid-rows-1 gap-5">
                    <div className="col-span-3 center">
                        <img className="w-[100px] h-[100px] rounded-full object-cover" src="https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg" />
                    </div>
                    <div className="col-span-4 center"><h1 className="text-4xl font-primary font-bold">{title}</h1></div>
                </div>
            </div>
        </>
    )
}

export default ProfileCard