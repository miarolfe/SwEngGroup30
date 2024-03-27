const TeamMember = ({ name, position, imageSrc, bio }) => {
    return (
      <div className="team-member flex">
        <img src={imageSrc} alt={name} className="team-member-image shrink-0" width={150} height={150}  />
        <div className="team-member-info">
          <h2 className="team-member-name">{name}</h2>
          <p className="team-member-position"><i>{position}</i></p>
          <p className="team-member-bio">{bio}</p>
        </div>
      </div>
    );
  };
  
  export default TeamMember;