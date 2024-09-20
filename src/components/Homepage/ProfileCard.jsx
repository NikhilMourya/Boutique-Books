const ProfileCard = ({ img, title }) => {
    return (
        <>
            <div className="profile-card">
                <div className="m-2 p-2 grid grid-cols-7 grid-rows-1 gap-5">
                    <div className="col-span-3 center p-1">
                        <img className="lg:w-[80px] md:w-20 md:h-20 w-14 h-14 lg:h-[80px] rounded-full object-cover" src={img} />
                    </div>
                    <div className="col-span-4 center"><h1 className="lg:text-4xl md:text-3xl text-2xl font-primary font-bold">{title}</h1></div>
                </div>
            </div>
        </>
    )
}

export default ProfileCard